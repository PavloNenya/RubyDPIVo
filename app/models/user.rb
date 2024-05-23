class User < ApplicationRecord
  validates :email, format: { with: Devise.email_regexp }
  belongs_to :role
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_one_attached :avatar

  has_many :wishlists
  has_many :favourite_products, through: :wishlists, source: :product

end
