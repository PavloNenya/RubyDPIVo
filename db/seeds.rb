# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

ActiveRecord::Base.connection.execute "INSERT INTO categories (name) VALUES ('Shoes');"
ActiveRecord::Base.connection.execute "INSERT INTO categories (name) VALUES ('T-shirt');"
ActiveRecord::Base.connection.execute "INSERT INTO categories (name) VALUES ('Shorts');"
ActiveRecord::Base.connection.execute "INSERT INTO categories (name) VALUES ('Socks');"
ActiveRecord::Base.connection.execute "INSERT INTO categories (name) VALUES ('Pants');"

ActiveRecord::Base.connection.execute "INSERT INTO producers (name) VALUES ('Nike');"
ActiveRecord::Base.connection.execute "INSERT INTO producers (name) VALUES ('Converse');"
ActiveRecord::Base.connection.execute "INSERT INTO producers (name) VALUES ('Jordan');"
ActiveRecord::Base.connection.execute "INSERT INTO producers (name) VALUES ('Jumpman');"
ActiveRecord::Base.connection.execute "INSERT INTO producers (name) VALUES ('WMNS');"
ActiveRecord::Base.connection.execute "INSERT INTO producers (name) VALUES ('Stance');"


ActiveRecord::Base.connection.execute "INSERT INTO colors (name) VALUES ('Green');"
ActiveRecord::Base.connection.execute "INSERT INTO colors (name) VALUES ('Blue');"
ActiveRecord::Base.connection.execute "INSERT INTO colors (name) VALUES ('Red');"
ActiveRecord::Base.connection.execute "INSERT INTO colors (name) VALUES ('Gray');"
ActiveRecord::Base.connection.execute "INSERT INTO colors (name) VALUES ('Black');"
ActiveRecord::Base.connection.execute "INSERT INTO colors (name) VALUES ('White');"
ActiveRecord::Base.connection.execute "INSERT INTO colors (name) VALUES ('Orange');"


ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('35');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('36');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('37');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('38');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('39');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('40');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('41');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('42');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('43');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('44');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('45');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('46');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('XXS');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('XS');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('S');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('M');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('L');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('XL');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('XXL');"
#
ActiveRecord::Base.connection.execute "INSERT INTO genders (name) VALUES ('Men');"
ActiveRecord::Base.connection.execute "INSERT INTO genders (name) VALUES ('Women');"
ActiveRecord::Base.connection.execute "INSERT INTO genders (name) VALUES ('Kids');"
ActiveRecord::Base.connection.execute "INSERT INTO genders (name) VALUES ('Unisex');"

CSV.foreach(Rails.root.join('db/products.csv'), headers: true) do |row|
  # Створюємо записи в базі даних за допомогою ActiveRecord
  Product.create!(
    producer_id: row['producer_id'],
    category_id: row['category_id'],
    name: row['name'],
    description: row['description'],
    price: row['price'],
    gender_id: row['gender_id'],
    main_photo_id: row['main_photo_id']
  )
end


CSV.foreach(Rails.root.join('db/product_instances.csv'), headers: true) do |row|
  # Get the values from each row
  product_id = row['product_id']
  color_id = row['color_id']
  size_id = row['size_id']

  # Create a new ProductInstance using ActiveRecord
  ProductInstance.create!(
    product_id: product_id,
    color_id: color_id,
    size_id: size_id
  )
end


ActiveRecord::Base.connection.execute "INSERT INTO roles (name) VALUES ('ADMIN');"
ActiveRecord::Base.connection.execute "INSERT INTO roles (name) VALUES ('USER');"
#
ActiveRecord::Base.connection.execute "INSERT INTO users (username, email, password, role_id) VALUES ('dim_ka_kao', 'dmytro@example.com', '1111', 1);"
ActiveRecord::Base.connection.execute "INSERT INTO users (username, email, password, role_id) VALUES ('creonluv', 'ivan@example.com', '1111', 1);"
ActiveRecord::Base.connection.execute "INSERT INTO users (username, email, password, role_id) VALUES ('pavlo.nenia', 'pavlo@example.com', '1111', 1);"
ActiveRecord::Base.connection.execute "INSERT INTO users (username, email, password, role_id) VALUES ('bhunter', 'volodymyr@example.com', '1111', 1);"
ActiveRecord::Base.connection.execute "INSERT INTO users (username, email, password, role_id) VALUES ('user1', 'user1@example.com', 'user1', 2);"
ActiveRecord::Base.connection.execute "INSERT INTO users (username, email, password, role_id) VALUES ('user2', 'user2@example.com', 'user2', 2);"
ActiveRecord::Base.connection.execute "INSERT INTO users (username, email, password, role_id) VALUES ('user3', 'user3@example.com', 'user3', 2);"
ActiveRecord::Base.connection.execute "INSERT INTO users (username, email, password, role_id) VALUES ( 'user4', 'user4@example.com', 'user4', 2);"
#
ActiveRecord::Base.connection.execute "INSERT INTO user_profiles (id, name, surname, phone_number, country, state, city, street, apartment)
VALUES (1, 'Dmytro', 'Berezhnyi', '+1234567890', 'Україна', 'Київська', 'Київ', 'вул. Шевченка 10', 'кв. 5');"
ActiveRecord::Base.connection.execute "INSERT INTO user_profiles (id, name, surname, phone_number, country, state, city, street, apartment)
VALUES (2, 'Ivan', 'Shlihutka', '+1234567890', 'Україна', 'Київська', 'Київ', 'вул. Шевченка 10', 'кв. 5');"
ActiveRecord::Base.connection.execute "INSERT INTO user_profiles (id, name, surname, phone_number, country, state, city, street, apartment)
VALUES (3, 'Pavlo', 'Nenia', '+1234567890', 'Україна', 'Київська', 'Київ', 'вул. Шевченка 10', 'кв. 5');"
ActiveRecord::Base.connection.execute "INSERT INTO user_profiles (id, name, surname, phone_number, country, state, city, street, apartment)
VALUES (4, 'Volodymyr', 'Novikov', '+1234567890', 'Україна', 'Київська', 'Київ', 'вул. Шевченка 10', 'кв. 5');"

ActiveRecord::Base.connection.execute "INSERT INTO shopping_carts (user_id) VALUES (1);"
ActiveRecord::Base.connection.execute "INSERT INTO shopping_carts (user_id) VALUES (2);"
ActiveRecord::Base.connection.execute "INSERT INTO shopping_carts (user_id) VALUES (3);"
ActiveRecord::Base.connection.execute "INSERT INTO shopping_carts (user_id) VALUES (4);"

ActiveRecord::Base.connection.execute "INSERT INTO cart_items (shopping_cart_id, product_instances_id, quantity) VALUES (1, 1, 11);"
ActiveRecord::Base.connection.execute "INSERT INTO cart_items (shopping_cart_id, product_instances_id, quantity) VALUES (1, 2, 11);"
ActiveRecord::Base.connection.execute "INSERT INTO cart_items (shopping_cart_id, product_instances_id, quantity) VALUES (1, 3, 11);"
ActiveRecord::Base.connection.execute "INSERT INTO cart_items (shopping_cart_id, product_instances_id, quantity) VALUES (2, 1, 22);"
ActiveRecord::Base.connection.execute "INSERT INTO cart_items (shopping_cart_id, product_instances_id, quantity) VALUES (2, 2, 22);"
ActiveRecord::Base.connection.execute "INSERT INTO cart_items (shopping_cart_id, product_instances_id, quantity) VALUES (2, 3, 22);"
ActiveRecord::Base.connection.execute "INSERT INTO cart_items (shopping_cart_id, product_instances_id, quantity) VALUES (3, 1, 33);"
ActiveRecord::Base.connection.execute "INSERT INTO cart_items (shopping_cart_id, product_instances_id, quantity) VALUES (3, 2, 33);"
ActiveRecord::Base.connection.execute "INSERT INTO cart_items (shopping_cart_id, product_instances_id, quantity) VALUES (3, 3, 33);"
ActiveRecord::Base.connection.execute "INSERT INTO cart_items (shopping_cart_id, product_instances_id, quantity) VALUES (4, 1, 44);"
ActiveRecord::Base.connection.execute "INSERT INTO cart_items (shopping_cart_id, product_instances_id, quantity) VALUES (4, 2, 44);"
ActiveRecord::Base.connection.execute "INSERT INTO cart_items (shopping_cart_id, product_instances_id, quantity) VALUES (4, 3, 44);"
#
ActiveRecord::Base.connection.execute "INSERT INTO product_material_cares (category_id, name) VALUES (1, 'Description of category care 1');"
ActiveRecord::Base.connection.execute "INSERT INTO product_material_cares (category_id, name) VALUES (2, 'Description of category care 2');"
ActiveRecord::Base.connection.execute "INSERT INTO product_material_cares (category_id, name) VALUES (3, 'Description of category care 3');"
ActiveRecord::Base.connection.execute "INSERT INTO product_material_cares (category_id, name) VALUES (4, 'Description of category care 4');"
ActiveRecord::Base.connection.execute "INSERT INTO product_material_cares (category_id, name) VALUES (5, 'Description of category care 5');"
#
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?



#
products = Product.all

products.each do |product|
  # Формуємо шлях до файлу з використанням ідентифікатора продукту
  file_path = "D:\\MyStudyAndUniversity\\Subject_1_MPP\\cursach-mpp\\RubyDPIVo\\db\\photos\\MAIN_PHOTOS\\PRODUCT_#{product.id}_MAIN_PHOTO.jpg"

  # Перевіряємо, чи існує файл перед його завантаженням
  if File.exist?(file_path)
    # Прикріплюємо фото до продукту
    puts file_path
    product.main_photo.attach(io: File.open(file_path), filename: "PRODUCT_#{product.id}_MAIN_PHOTO.jpg", content_type: 'image/jpeg')

    # Зберігаємо продукт після прикріплення фото, щоб оновити main_photo_id
    product.save!

    puts "Attached main photo for product with ID #{product.id}"
  else
    puts "File not found for product with ID #{product.id}"
  end
end

products = Product.all

products.each do |product|
  # Формуємо шлях до папки з фотографіями продукту
  folder_path = "D:\\MyStudyAndUniversity\\Subject_1_MPP\\cursach-mpp\\RubyDPIVo\\db\\photos\\PRODUCT_#{product.id}"

  # Перевіряємо, чи існує папка перед зчитуванням фотографій
  if Dir.exist?(folder_path)
    # Отримуємо список файлів у папці
    Dir.entries(folder_path).each do |file|
      next if file == '.' || file == '..' # Пропускаємо поточну (.) та батьківську (..) папки

      # Формуємо повний шлях до фотографії
      photo_path = File.join(folder_path, file)

      # Перевіряємо, чи є файл фотографії
      if File.file?(photo_path)
        # Додаємо фотографію до поля images продукту
        puts "Adding photo #{file} to product with ID #{product.id}"
        product.images.attach(io: File.open(photo_path), filename: file, content_type: 'image/jpeg')
      end
    end
  else
    puts "Folder not found for product with ID #{product.id}"
  end
end