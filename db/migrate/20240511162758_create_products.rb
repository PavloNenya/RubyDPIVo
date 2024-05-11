class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.string :name
      t.references :category, null: false, foreign_key: true
      t.references :producer, null: false, foreign_key: true
      t.string :description
      t.float :price
      t.integer :main_image_id
      t.references :gender, null: false, foreign_key: true
    end
  end
end
