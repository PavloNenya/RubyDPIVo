class Api::UsersController < ApplicationController
  before_action :authenticate_request
  # before_action :authenticate_user!
  include Api::ProductHelper
  # before_action :authenticate_request
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render json: @user
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  def current
    @user = @current_user
    if @user
      render json: @user
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  def create
    @existing = User.find_by(email: params[:email])
    if @existing
      render json: '{"error":"User already registered!"}', status: :conflict
    else
      @user = User.create(username: params[:username], password: params[:password], email: params[:email], role_id: Role::USER)
      if @user.save
        render json: @user, status: :created
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end
  end

  # def login
  #   @existing = User.find_by(username: params[:username], password: params[:password])
  #
  #   # @existing = User.find_by(email: params[:email], password: params[:password])
  #   if @existing
  #     puts "Existing =" + @existing.to_s
  #     render json: @existing, status: :found
  #   else
  #     render json: '{"error":"User not registered!"}', status: :conflict
  #   end
  # end

  def delete
    @user = User.find(params[:id])
    @user.destroy
    head :no_content
  end

  def get_wishlist
    @user = @current_user
    puts "CURRENT USER = " + @user.to_s
    if @user.nil?
      render json: []
    else
      @products = @user.favourite_products
      render json: @products.map { |product| product_to_json(product) }
    end
  end

  def delete_wishlist_product_id
    @user = @current_user
    if @user
      product = Product.find_by(id: params[:id])
      if product
        @user.favourite_products.delete(product)
        render json: { message: "Product removed from wishlist successfully" }, status: :ok
      else
        render json: { error: "Product not found" }, status: :not_found
      end
    else
      render json: { error: "User not authenticated" }, status: :unauthorized
    end
  end

  def add_wishlist_product_id
    @user = @current_user
    puts "CURRENT USER ADD WISHLIST PROD + #{@user}"
    if @user
      product = Product.find_by(id: params[:id])
      if product
        @user.favourite_products.append(product)
        render json: { message: "Product added to wishlist successfully" }, status: :ok
      else
        render json: { error: "Product not found" }, status: :not_found
      end
    else
      render json: { error: "User not authenticated" }, status: :unauthorized
    end
  end

  def get_id_wishlist
    @user = User.find_by(id: params[:id])
    if @user.nil?
      render json: { error: "User not found" }, status: :not_found
    else
      @products = @user.favourite_products
      if @products.empty?
        render json: []
      else
        render json: @products.map { |product| product_to_json(product) }
      end
    end
  end
end
