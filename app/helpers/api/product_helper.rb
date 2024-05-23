module Api::ProductHelper
  def get_products_from_filter

  end

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
      # images: product.images.map do |image|
      #   {
      #     id: image.id,
      #     url: Rails.application.routes.url_helpers.rails_blob_url(image, only_path: true)
      #   }
      # end,
      images:
        product.images.map do |image|
          image.id
        end,
      price: product.price,
      main_photo_id: product.main_photo.id
    }
  end
end
