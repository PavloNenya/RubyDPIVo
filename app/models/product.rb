class Product < ApplicationRecord
  belongs_to :category
  belongs_to :producer
  belongs_to :gender
  has_many :product_instances
  has_many_attached :images
  has_one_attached :main_photo

  def self.ransackable_associations(auth_object = nil)
    @ransackable_associations ||= reflect_on_all_associations.map { |a| a.name.to_s }
  end

  def self.ransackable_attributes(auth_object = nil)
    @ransackable_attributes ||= column_names + _ransackers.keys + _ransack_aliases.keys + attribute_aliases.keys
  end
end
