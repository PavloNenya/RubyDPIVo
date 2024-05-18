class Api::ProductInstanceController < ApplicationController
  def index
    @product_instances = ProductInstance.all
    render json: @product_instances
  end

  def show
    @product_instance = ProductInstance.find_by(id: params[:id])
    if @product_instance
      render json: @product_instance
    else
      render json: { error: "Product Instance not found" }, status: :not_found
    end
  end

  def create
    @product_instance = ProductInstance.create(product_instance_params)
    if @product_instance.save
      render json: @product_instance, status: :created
    else
      render json: @product_instance.errors, status: :unprocessable_entity
    end
  end

  def product_instance_params
    params.permit(:color, :size, :product)
  end

  def delete
    @product_instance = ProductInstance.find(params[:id])
    @product_instance.destroy
    head :no_content
  end
end
