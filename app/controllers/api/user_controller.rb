class Api::UserController < ApplicationController
  def index
  end

  def show
  end

  def create
  end

  def delete
    @user = User.find(params[:id])
    @user.destroy
    head :no_content
  end
end
