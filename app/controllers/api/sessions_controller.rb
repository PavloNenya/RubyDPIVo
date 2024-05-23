class Api::SessionsController < Devise::SessionsController
  # LOGIN
  # before_action :authenticate_user!, only: [:create]

  # def new
  #   self.resource = warden.authenticate!(auth_options)
  #   sign_in(resource_name, resource)
  #   yield resource if block_given?
  #   render json: { message: "User logged in successfully", user: resource }
  # end

  # skip_before_action :verify_authenticity_token, only: [:create, :new]


  skip_before_action :verify_authenticity_token, only: [:create, :destroy]

  # POST /api/users/login
  def new
    create
  end
  def create
    puts "AUTH OPTIONS = " + auth_options.to_s

    email = params[:email]
    password = params[:password]

    # Перевірка, чи всі необхідні дані передані
    if email.blank? || password.blank?
      render json: { error: "Email and password are required" }, status: :unprocessable_entity
      return
    end

    # Пошук користувача за email
    user = User.find_by(email: email)

    # Перевірка, чи користувач існує та чи вірний пароль
    if user && user.valid_password?(password)
      sign_in(user)
      render json: { message: "User logged in successfully", user: user }
    else
      render json: { error: "Invalid email or password" }, status: :unauthorized
    end
  end

  def destroy
    sign_out(current_user)
    render json: { message: "Logged out successfully" }, status: :ok
  end
end

