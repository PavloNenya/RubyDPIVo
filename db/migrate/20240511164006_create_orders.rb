class CreateOrders < ActiveRecord::Migration[7.1]
  def change
    create_table :orders do |t|
      t.date :date_submission
      t.date :date_completion
      t.date :date_payment
      t.references :shopping_cart, null: false, foreign_key: true
    end
  end
end
