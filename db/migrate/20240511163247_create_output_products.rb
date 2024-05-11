class CreateOutputProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :output_products do |t|
      t.integer :quantity
      t.float :cost
      t.date :date_sell
      t.references :product_instance, null: false, foreign_key: true
    end
  end
end
