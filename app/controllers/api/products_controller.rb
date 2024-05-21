class Api::ProductsController < ApplicationController

  skip_before_action :verify_authenticity_token, only: [:filter]
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
    params.permit(
      :name,
      :description,
      :producer_id,
      :price,
      :category_id,
      :gender_id,
      :main_photo_id,
      :page,
      :min_price,
      :max_price,
      :sort_field,
      :sort_order,
      images: []
    )
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
    @products = Product.all

    page = -1
    if params[:page].present?
      page = params[:page]
    end
    puts "page = " + page.to_s
    # filter_params = product_filter_params
    #
    conditions = {}
    conditions[:category_id] = params[:category_ids] if params[:category_ids].present?
    conditions[:producer_id] = params[:producer_ids] if params[:producer_ids].present?
    conditions[:gender_id] = params[:gender_ids] if params[:gender_ids].present?

    if params[:min_price].present? && params[:max_price].present?
      conditions[:price] = params[:min_price].to_f..params[:max_price].to_f
    elsif params[:min_price].present?
      conditions[:price] = params[:min_price].to_f..50000
    elsif params[:max_price].present?
      conditions[:price] = 0..params[:max_price].to_f
    end

    puts "CONDITIONS  = " + conditions.to_s
    #
    sort_field = params[:sort_field] || 'name'
    sort_order = params[:sort_order] || 'asc'
    @products = Product.where(conditions)

    if params[:size_ids].present?
      @products = @products.joins(:product_instances)
                           .where(product_instances: { size_id: params[:size_ids] })
    end

    @products = @products.distinct.order("#{sort_field} #{sort_order}")

    if page != -1
      @products = @products.page(page).per(12)
    end

    # Отримання необхідних даних для пагінації
    total_pages = @products.total_pages
    total_elements = @products.total_count
    number_of_elements = @products.size

    # Створення JSON об'єкту
    result = {
      content: @products.map { |product| product_to_json(product) },
      pageable: {
        pageNumber: @products.current_page - 1,
        pageSize: @products.limit_value,
        sort: {
          empty: @products.order_values.empty?,
          unsorted: !@products.order_values.any?,
          sorted: @products.order_values.any?
        },
        offset: @products.offset_value,
        paged: @products.respond_to?(:current_page),
        unpaged: !@products.respond_to?(:current_page)
      },
      last: @products.last_page?,
      totalPages: total_pages,
      totalElements: total_elements,
      numberOfElements: number_of_elements,
      first: @products.first_page?,
      size: @products.limit_value,
      number: @products.current_page - 1,
      sort: {
        empty: @products.order_values.empty?,
        unsorted: !@products.order_values.any?,
        sorted: @products.order_values.any?
      },
      empty: @products.empty?
    }

    render json: result
  end

  # def product_filter_params
  #   params.permit(
  #     category_ids: [],
  #     producer_ids: [],
  #     gender_ids: [],
  #     size_ids: [],
  #     min_price: :float,
  #     max_price: :float,
  #     sort_field: :string,
  #     sort_order: :string
  #   )
  # end

  def product_filter_params
    params.permit(
      category_ids: [],
      producer_ids: [],
      gender_ids: [],
      size_ids: [],
      min_price: :float,
      max_price: :float,
      sort_field: :string,
      sort_order: :string,
      page: :integer
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

  def instances_product_page
    @product = Product.find_by(id: params[:id])

    if @product
      render json: @product.product_instances.map { |instance| product_instance_to_json(instance) }
    else
      render json: { error: "Product not found" }, status: :not_found
    end
  end

  private

  def product_instance_to_json(instance)
    {
      product_instance_id: instance.id,
      size_name: instance.size.name,
      present: instance.quantity
    }
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
      images: product.images.map do |image|
        {
          id: image.id,
          url: Rails.application.routes.url_helpers.rails_blob_url(image, only_path: true)
        }
      end,
      price: product.price,
      main_photo_id: product.main_photo_id
    }
  end

end
