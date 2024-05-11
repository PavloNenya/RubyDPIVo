class Product < ApplicationRecord
  belongs_to :category
  belongs_to :producer
  belongs_to :gender
end
