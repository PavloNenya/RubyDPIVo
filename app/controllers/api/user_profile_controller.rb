class Api::UserProfileController < ApplicationController
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

  def create
    # @user_profile = UserProfile.create()
    # if @user_profile.save
    #   render json: @user_profile, status: :created
    # else
    #   render json: @user_profile.errors, status: :unprocessable_entity
    # end
  end

  def delete
    @user = UserProfile.find(params[:id])
    @user.destroy
    head :no_content
  end
end
