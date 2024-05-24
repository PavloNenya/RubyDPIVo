# class Api::RegistrationsController < Devise::RegistrationsController
#   before_action :authenticate_user!
#   skip_before_action :verify_authenticity_token, only: [:create]
#
#   #REGISTER
#   # def create
#   #   # super
#   #   @role = Role.find_by(name: "USER")
#   #   @user = User.new(username: params[:username], email: params[:email], password: params[:password], role: @role)
#   #
#   #   # Перевірка на валідність об'єкта користувача
#   #   if @user.valid?
#   #     # Збереження нового користувача в базі даних
#   #     @user.save
#   #     # Успішне входження нового користувача
#   #     sign_in(@user)
#   #     render json: { message: "User registered and logged in successfully", user: @user }
#   #   else
#   #     render json: { error: "Failed to register user", errors: @user.errors }, status: :unprocessable_entity
#   #   end
#   #
#   # end
#
#   def create
#     user = User.new(user_params)
#     if user.save
#       token = JsonWebTokenHelper.encode(user_id: user.id)
#       render json: { token: token, user: user }, status: :created
#     else
#       render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
#     end
#   end
#
#   private
#
#   def configure_sign_up_params
#     devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :email, :password, :password_confirmation])
#   end
# end

class Api::RegistrationsController < ApplicationController

  skip_before_action :authenticate_request, only: [:create, :login]

  include Api::JsonWebTokenHelper

  def create

    @role = Role.find_by(name: "USER")

    puts "User details before saving:"
    puts "Username: #{params[:username]}"
    puts "Email: #{params[:email]}"
    puts "Password: #{params[:password]}"


    @user = User.new(username: params[:username], email: params[:email], password: params[:password], role: @role)
    puts "CURRENT USER =  " +  @user.valid?.to_s
    if @user.save
      token = Api::JsonWebTokenHelper.encode(username: @user.username)
      puts "token = " + token.to_s
      render json: { accessToken: token }, status: :created
    else
      render json: { error: "Failed to register user", errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def login
    user = User.find_by(username: params[:username])

    if user && user.valid_password?(params[:password])
      puts "Hello"
      token = Api::JsonWebTokenHelper.encode(username: user.username)
      render json: { accessToken: token }, status: :created
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end