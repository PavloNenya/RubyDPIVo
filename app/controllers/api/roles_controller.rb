class Api::RolesController < ApplicationController

  before_action :authenticate_request
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

  def create
    @role = Role.create(name:  NameDTO.new(name: params[:name]).name)
    if @role.save
      render json: @role, status: :created
    else
      render json: @role.errors, status: :unprocessable_entity
    end
  end

  def delete
    @role = Role.find(params[:id])
    @role.destroy
    head :no_content
  end
end
