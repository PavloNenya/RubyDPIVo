class CreateProducers < ActiveRecord::Migration[7.1]
  def change
    create_table :producers do |t|
      t.string :name
    end
  end
end
