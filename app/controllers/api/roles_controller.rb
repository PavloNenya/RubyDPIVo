class Api::RolesController < ApplicationController
  def index
    @roles = Role.all
    render json: @roles
  end

  def show
    @role = Role.find_by(id: params[:id])
    if @role
      render json: @role
    else
      render json: { error: "Role not found" }, status: :not_found
    end
  end

  def name
    @role = Role.find_by(name: params[:name])
    if @role
      render json: @role
    else
      render json: { error: "Role not found" }, status: :not_found
    end
  end
end
