class CreateInputProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :input_products do |t|
      t.integer :quantity
      t.float :cost
      t.date :date_received
      t.references :product_instance, null: false, foreign_key: true
    end
  end
end
