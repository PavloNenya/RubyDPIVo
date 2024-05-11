class CreateShoppingCarts < ActiveRecord::Migration[7.1]
  def change
    create_table :shopping_carts do |t|
      t.references :user, null: false, foreign_key: true
    end
  end
end
