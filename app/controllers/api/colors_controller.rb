class Api::ColorsController < ApplicationController

  before_action :authenticate_request
  def index
    @colors = Color.all
    render json: @colors
  end

  def show
    @color = Color.find_by(id: params[:id])
    if @color
      render json: @color
    else
      render json: { error: "Color not found" }, status: :not_found
    end
  end

  def name
    @color = Color.find_by(name: params[:name])
    if @color
      render json: @color
    else
      render json: { error: "Color not found" }, status: :not_found
    end
  end

  def create
    @color = Color.create(name: NameDTO.new(name: params[:name]).name)
    if @color.save
      render json: @color, status: :created
    else
      render json: @color.errors, status: :unprocessable_entity
    end
  end

  def delete
    @color = Color.find(params[:id])
    @color.destroy
    head :no_content
  end
end
