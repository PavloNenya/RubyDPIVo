class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render json: @categories
  end

  def show
    @category = Category.find_by(id: params[:id])
    if @category
      render json: @category
    else
      render json: { error: "Category not found" }, status: :not_found
    end
  end

  def name
    @category = Category.find_by(name: params[:name])
    if @category
      render json: @category
    else
      render json: { error: "Category not found" }, status: :not_found
    end
  end
end
