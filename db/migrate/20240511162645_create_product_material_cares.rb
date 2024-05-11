class CreateProductMaterialCares < ActiveRecord::Migration[7.1]
  def change
    create_table :product_material_cares do |t|
      t.string :name
      t.references :category, null: false, foreign_key: true
    end
  end
end
