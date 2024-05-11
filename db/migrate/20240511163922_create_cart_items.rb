class CreateCartItems < ActiveRecord::Migration[7.1]
  def change
    create_table :cart_items do |t|
      t.references :shopping_cart, null: false, foreign_key: true
      t.references :product_instances, null: false, foreign_key: true
      t.integer :quantity
    end
  end
end
