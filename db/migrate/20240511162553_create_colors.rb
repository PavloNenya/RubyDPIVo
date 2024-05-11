class CreateColors < ActiveRecord::Migration[7.1]
  def change
    create_table :colors do |t|
      t.string :name
    end
  end
end
