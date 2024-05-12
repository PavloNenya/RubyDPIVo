class Api::UserProfileController < ApplicationController
  def index
  end

  def show
  end

  def create
  end

  def delete
    @user = UserProfile.find(params[:id])
    @user.destroy
    head :no_content
  end
end
