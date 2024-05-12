class Api::CartItemController < ApplicationController
  def index
    @cart_items = CartItem.all
    render json: @cart_items
  end

  def show
    @cart_item = CartItem.find_by(id: params[:id])
    if @cart_item
      render json: @cart_item
    else
      render json: { error: "Cart Item not found" }, status: :not_found
    end
  end

  def create
    @cart_item = CartItem.create(name: NameDTO.new(name: params[:name]).name)
    if @cart_item.save
      render json: @cart_item, status: :created
    else
      render json: @cart_item.errors, status: :unprocessable_entity
    end
  end

  def delete
    @cart = CartItem.find(params[:id])
    @cart.destroy
    head :no_content
  end
end
