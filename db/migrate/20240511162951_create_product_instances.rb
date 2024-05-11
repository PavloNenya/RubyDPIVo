class CreateProductInstances < ActiveRecord::Migration[7.1]
  def change
    create_table :product_instances do |t|
      t.references :color, null: false, foreign_key: true
      t.references :size, null: false, foreign_key: true
      t.references :product, null: false, foreign_key: true
    end
  end
end
