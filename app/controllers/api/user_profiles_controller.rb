class Api::UserProfilesController < ApplicationController
  before_action :authenticate_request
  def index
    @users = UserProfile.all
    render json: @users
  end

  def show
    @user = UserProfile.find_by(id: params[:id])
    if @user
      render json: @user
    else
      render json: { error: "User profile not found" }, status: :not_found
    end
  end

  def current_user_profile
    @user_profile = UserProfile.find_by(id: @current_user.id)
    if @user_profile
      render json: @user_profile
    else
      render json: { error: "User profile not found" }, status: :not_found
    end
  end


  def create
    # @user_profile = UserProfile.create()
    # if @user_profile.save
    #   render json: @user_profile, status: :created
    # else
    #   render json: @user_profile.errors, status: :unprocessable_entity
    # end
  end

  def update
    id = params[:id].present? ? params[:id] : current_user.id
    @user_profile = UserProfile.find_by(id: id)
    if @user_profile
      if @user_profile.update(user_profile_params)
        render json: @user_profile
      else
        render json: { error: "Failed to update user profile", errors: @user_profile.errors.full_messages }, status: :unprocessable_entity
      end
    else
      @user_profile = UserProfile.new(
        id: @current_user.id,
        name: params[:name],
        surname: params[:surname],
        phone_number: params[:phone_number],
        country: params[:country],
        state: params[:state],
        city: params[:city],
        street: params[:street],
        apartment: params[:apartment]
      )
      @user_profile.id = @current_user.id

      if @user_profile.save
        @user_profile.id = @current_user.id
        render json: @user_profile, status: :created
      else
        render json: { error: "Failed to create user profile", errors: @user_profile.errors.full_messages }, status: :unprocessable_entity
      end
    end
  end

  def delete
    @user = UserProfile.find(params[:id])
    @user.destroy
    head :no_content
  end

  def user_profile_params
    params.require(:user_profile).permit(:id, :name, :surname, :phone_number, :country, :state, :city, :street, :apartment)
  end
end
