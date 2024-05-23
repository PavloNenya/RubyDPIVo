class CreateWishlists < ActiveRecord::Migration[7.1]
  def change
    create_table :wishlists, id: false do |t|
      t.integer :user_id, null: false
      t.integer :product_id, null: false
    end

    add_index :wishlists, [:user_id, :product_id], unique: true
    add_foreign_key :wishlists, :users, column: :user_id
    add_foreign_key :wishlists, :products, column: :product_id
  end
end