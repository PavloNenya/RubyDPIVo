class CreateShipments < ActiveRecord::Migration[7.1]
  def change
    create_table :shipments do |t|
      t.date :shipping_date
      t.references :order, null: false, foreign_key: true
      t.string :tracking_number
    end
  end
end
