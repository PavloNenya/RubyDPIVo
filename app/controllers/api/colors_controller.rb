class Api::ColorsController < ApplicationController
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
end
