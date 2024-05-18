ActiveAdmin.register Product do
  permit_params :name, :description, :price, :category, :producer, :gender

  filter :name
  filter :category
  filter :producer
  filter :gender

  index do
    selectable_column
    id_column
    column :name
    column :description
    column :price
    column :category
    column :producer
    column :gender
    actions
  end

  form do |f|
    f.inputs do
      f.input :name
      f.input :description
      f.input :price
      f.input :category
      f.input :producer
      f.input :gender
    end
    f.actions
  end
end
