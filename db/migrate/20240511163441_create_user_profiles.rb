class CreateUserProfiles < ActiveRecord::Migration[7.1]
  def change
    create_table :user_profiles do |t|
      t.string :name
      t.string :surname
      t.string :phone_number
      t.string :country
      t.string :state
      t.string :city
      t.string :street
      t.string :apartment
    end
  end
end
