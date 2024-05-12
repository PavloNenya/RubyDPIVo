class ProductFilterRequestDto
  attr_accessor :category_ids,
                :producer_ids,
                :gender_ids,
                :size_ids,
                :min_price,
                :max_price,
                :sort_field,
                :sort_order

  def initialize(category_ids: [], producer_ids: [], gender_ids: [], size_ids: [], min_price: nil, max_price: nil, sort_field: nil, sort_order: nil)
    @category_ids = category_ids
    @producer_ids = producer_ids
    @gender_ids = gender_ids
    @size_ids = size_ids
    @min_price = min_price
    @max_price = max_price
    @sort_field = sort_field
    @sort_order = sort_order
  end
end

