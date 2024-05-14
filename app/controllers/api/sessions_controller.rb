class SessionsController < Devise::SessionsController
  before_action :authenticate_user!

  def destroy
    sign_out(current_user)
    render json: { message: "Logged out successfully" }, status: :ok
  end
end

