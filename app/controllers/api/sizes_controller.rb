class Api::SizesController < ApplicationController
  def index
    @sizes = Size.all
    render json: @sizes
  end

  def show
    @size = Size.find_by(id: params[:id])
    if @size
      render json: @size
    else
      render json: { error: "Size not found" }, status: :not_found
    end
  end

  def name
    @size = Size.find_by(name: params[:name].upcase)
    if @size
      render json: @size
    else
      render json: { error: "Size not found" }, status: :not_found
    end
  end

end
