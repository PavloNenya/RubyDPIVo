class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    render json: @products.map { |product| product_to_json(product) }
  end

  def name
    @product = Product.find_by(name: params[:name])
    if @product
      render json: product_to_json(@product)
    else
      render json: { error: "Product not found" }, status: :not_found
    end
  end

  def create
    @product = Product.new(product_params)

    if @product.save
      render json: product_to_json(@product), status: :created
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def product_params
    params.permit(:name, :description, :producer_id, :price, :category_id, :gender_id, :main_photo_id)
  end

  def update
    @product = Product.find_by(id: params[:id])

    if @product.update(product_params)
      render json: product_to_json(@product), status: :created
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def filter
    page = -1
    if params[:page].present?
      page = params[:page]
    end
    filter_params = product_filter_params

    conditions = {}
    conditions[:category_id] = filter_params[:category_ids] if filter_params[:category_ids].present?
    conditions[:producer_id] = filter_params[:producer_ids] if filter_params[:producer_ids].present?
    conditions[:gender_id] = filter_params[:gender_ids] if filter_params[:gender_ids].present?
    conditions[:price] = filter_params[:min_price]..filter_params[:max_price] if filter_params[:min_price].present? && filter_params[:max_price].present?

    sort_field = filter_params[:sort_field] || 'name'
    sort_order = filter_params[:sort_order] || 'desc'

    if page != -1
      @products = Product
                    .where(conditions)
                    .joins(:product_instances)
                    .where(product_instances: { size_id: filter_params[:size_ids] })
                    .distinct
                    .order("#{sort_field} #{sort_order}")
                    .page(page)
                    .per(12)
    else
      @products = Product
                    .where(conditions)
                    .joins(:product_instances)
                    .where(product_instances: { size_id: filter_params[:size_ids] })
                    .distinct
                    .order("#{sort_field} #{sort_order}")
    end
    render json: @products
  end

  def product_filter_params
    params.permit(
      category_ids: [],
      producer_ids: [],
      gender_ids: [],
      size_ids: [],
      min_price: :float,
      max_price: :float,
      sort_field: :string,
      sort_order: :string
    )
  end

  def show
    @product = Product.find_by(id: params[:id])
    if @product
      render json: product_to_json(@product)
    else
      render json: { error: "Product not found" }, status: :not_found
    end
  end

  def delete
    @product = Product.find(params[:id])
    @product.destroy
    head :no_content
  end

  private

  def product_to_json(product)
    {
      id: product.id,
      producer: {
        id: product.producer.id,
        name: product.producer.name
      },
      category: {
        id: product.category.id,
        name: product.category.name
      },
      gender: {
        id: product.gender.id,
        name: product.gender.name
      },
      name: product.name,
      description: product.description,
      images: [],
      # images: product.images.map(&:id), # Передбачається використання Active Storage
      price: product.price,
      main_photo_id: product.main_photo_id
    }
  end

end
