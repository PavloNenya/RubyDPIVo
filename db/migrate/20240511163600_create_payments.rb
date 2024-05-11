class CreatePayments < ActiveRecord::Migration[7.1]
  def change
    create_table :payments do |t|
      t.date :payment_date
      t.string :payment_method
      t.integer :amount
      t.references :user, null: false, foreign_key: true
    end
  end
end
