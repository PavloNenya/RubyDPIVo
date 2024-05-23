class Api::RegistrationsController < Devise::RegistrationsController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token, only: [:create]

  #REGISTER
  def create
    # super
    @role = Role.find_by(name: "USER")
    @user = User.new(username: params[:username], email: params[:email], password: params[:password], role: @role)

    # Перевірка на валідність об'єкта користувача
    if @user.valid?
      # Збереження нового користувача в базі даних
      @user.save
      # Успішне входження нового користувача
      sign_in(@user)
      render json: { message: "User registered and logged in successfully", user: @user }
    else
      render json: { error: "Failed to register user", errors: @user.errors }, status: :unprocessable_entity
    end

  end


  # def create
  #   build_resource(sign_up_params)
  #
  #   resource.save
  #   yield resource if block_given?
  #   if resource.persisted?
  #     if resource.active_for_authentication?
  #       sign_up(resource_name, resource)
  #       render json: { message: "User registered and logged in successfully", user: resource }
  #     else
  #       expire_data_after_sign_in!
  #       render json: { message: "User registered successfully. Please confirm your email address to activate your account." }
  #     end
  #   else
  #     clean_up_passwords resource
  #     set_minimum_password_length
  #     render json: { error: "Failed to register user", errors: resource.errors }, status: :unprocessable_entity
  #   end
  # end

  private

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :email, :password, :password_confirmation])
  end
end
