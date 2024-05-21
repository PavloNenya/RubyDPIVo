class AddQuantityToProductInstances < ActiveRecord::Migration[7.1]
  def change
    add_column :product_instances, :quantity, :integer, default: 0, null: false
  end
end
