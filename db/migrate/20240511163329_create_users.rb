class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password
      t.references :role, null: false, foreign_key: true
      t.integer :photo_id
    end
  end
end
