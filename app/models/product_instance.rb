class ProductInstance < ApplicationRecord
  belongs_to :color
  belongs_to :size
  belongs_to :product
end
