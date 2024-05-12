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

  def create
    @category = Category.create(name: NameDTO.new(name: params[:name]).name)
    if @category.save
      render json: @category, status: :created
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end
end
