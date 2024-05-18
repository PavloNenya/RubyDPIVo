class Api::UserController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render json: @user
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  def create
    @existing = User.find_by(email: params[:email])
    if @existing
      render json: '{"error":"User already registered!"}', status: :conflict
    else
      @user = User.create(username: params[:username], password: params[:password], email: params[:email], role_id: Role::USER)
      if @user.save
        render json: @user, status: :created
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end
  end
  def login
    @existing = User.find_by(email: params[:email], password: params[:password])
    if @existing
      render json: @existing, status: :found
    else
      render json: '{"error":"User not registered!"}', status: :conflict
    end
  end

  def delete
    @user = User.find(params[:id])
    @user.destroy
    head :no_content
  end
end
