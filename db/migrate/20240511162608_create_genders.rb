class CreateGenders < ActiveRecord::Migration[7.1]
  def change
    create_table :genders do |t|
      t.string :name
    end
  end
end
