class ProductDto
  attr_accessor :id,
                :producer_id,
                :category_id,
                :gender_id,
                :name,
                :description,
                :main_photo_id,
                :price

  def initialize(id: nil, producer_id: nil, category_id: nil, gender_id: nil, name: nil, description: nil, main_photo_id: nil, price: nil)
    @id = id
    @producer_id = producer_id
    @category_id = category_id
    @gender_id = gender_id
    @name = name
    @description = description
    @main_photo_id = main_photo_id
    @price = price
  end
end
