class Api::ShoppingCartController < ApplicationController

  before_action :authenticate_request
  def index
    @carts = ShoppingCart.all
    render json: @carts
  end

  def show
    @cart = ShoppingCart.find_by(id: params[:id])
    if @cart
      render json: @cart
    else
      render json: { error: "Shopping cart not found" }, status: :not_found
    end
  end

  def name
    @cart = ShoppingCart.find_by(name: params[:name])
    if @cart
      render json: @cart
    else
      render json: { error: "Shopping cart not found" }, status: :not_found
    end
  end

  def create
    user_id = params[:user_id]
    user = User.find_by(id: user_id)
    @cart = ShoppingCart.new(user: user)
    if @cart.save
      render json: @cart, status: :created
    else
      render json: @cart.errors, status: :unprocessable_entity
    end
  end

  def delete
    @cart = ShoppingCart.find(params[:id])
    @cart.destroy
    head :no_content
  end
end
