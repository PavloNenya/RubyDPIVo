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
ActiveRecord::Base.connection.execute "INSERT INTO categories (name) VALUES ('Coat');"
ActiveRecord::Base.connection.execute "INSERT INTO categories (name) VALUES ('Pants');"
ActiveRecord::Base.connection.execute "INSERT INTO categories (name) VALUES ('Socks');"
ActiveRecord::Base.connection.execute "INSERT INTO categories (name) VALUES ('Shorts');"
ActiveRecord::Base.connection.execute "INSERT INTO categories (name) VALUES ('Shirt');"

ActiveRecord::Base.connection.execute "INSERT INTO producers (name) VALUES ('Nike');"
ActiveRecord::Base.connection.execute "INSERT INTO producers (name) VALUES ('Adidas');"
ActiveRecord::Base.connection.execute "INSERT INTO producers (name) VALUES ('Puma');"
ActiveRecord::Base.connection.execute "INSERT INTO producers (name) VALUES ('Reebok');"
ActiveRecord::Base.connection.execute "INSERT INTO producers (name) VALUES ('Asics');"
ActiveRecord::Base.connection.execute "INSERT INTO producers (name) VALUES ('Champion');"
ActiveRecord::Base.connection.execute "INSERT INTO producers (name) VALUES ('The North Face');"

ActiveRecord::Base.connection.execute "INSERT INTO colors (name) VALUES ('Green');"
ActiveRecord::Base.connection.execute "INSERT INTO colors (name) VALUES ('Blue');"
ActiveRecord::Base.connection.execute "INSERT INTO colors (name) VALUES ('Red');"
ActiveRecord::Base.connection.execute "INSERT INTO colors (name) VALUES ('Gray');"
ActiveRecord::Base.connection.execute "INSERT INTO colors (name) VALUES ('Black');"
ActiveRecord::Base.connection.execute "INSERT INTO colors (name) VALUES ('White');"
ActiveRecord::Base.connection.execute "INSERT INTO colors (name) VALUES ('Orange');"

ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('XXS');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('XS');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('S');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('M');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('L');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('XL');"
ActiveRecord::Base.connection.execute "INSERT INTO sizes (name) VALUES ('XXL');"

ActiveRecord::Base.connection.execute "INSERT INTO genders (name) VALUES ('Men');"
ActiveRecord::Base.connection.execute "INSERT INTO genders (name) VALUES ('Women');"
ActiveRecord::Base.connection.execute "INSERT INTO genders (name) VALUES ('Kids');"
ActiveRecord::Base.connection.execute "INSERT INTO genders (name) VALUES ('Unisex');"

ActiveRecord::Base.connection.execute "INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_image_id) VALUES (1, 1, 'Nike Shoes 1', 'Description for Product', 100,     1,    1);"
ActiveRecord::Base.connection.execute "INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_image_id) VALUES (1, 1, 'Nike Shoes 2', 'Description for Product', 100,     1,    2);"
ActiveRecord::Base.connection.execute "INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_image_id) VALUES (2, 2, 'Adidas t-shirt 1', 'Description for Product', 100, 2,    3);"
ActiveRecord::Base.connection.execute "INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_image_id) VALUES (2, 1, 'Adidas shoes 1', 'Description for Product', 100,   2,    4);"
ActiveRecord::Base.connection.execute "INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_image_id) VALUES (3, 1, 'Puma shoes 1', 'Description for Product', 100,     3,    5);"
ActiveRecord::Base.connection.execute "INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_image_id) VALUES (3, 1, 'Puma shoes 2', 'Description for Product', 100,     4,    6);"
ActiveRecord::Base.connection.execute "INSERT INTO products (producer_id, category_id, name, description, price, gender_id, main_image_id) VALUES (4, 2, 'Reebok t-shirt 1', 'Description for Product', 100, 4,    7);"

ActiveRecord::Base.connection.execute "INSERT INTO product_instances (product_id, color_id, size_id) VALUES (1, 1, 1);"
ActiveRecord::Base.connection.execute "INSERT INTO product_instances (product_id, color_id, size_id) VALUES (1, 2, 2);"
ActiveRecord::Base.connection.execute "INSERT INTO product_instances (product_id, color_id, size_id) VALUES (2, 3, 3);"
ActiveRecord::Base.connection.execute "INSERT INTO product_instances (product_id, color_id, size_id) VALUES (2, 4, 4);"
ActiveRecord::Base.connection.execute "INSERT INTO product_instances (product_id, color_id, size_id) VALUES (3, 5, 5);"
ActiveRecord::Base.connection.execute "INSERT INTO product_instances (product_id, color_id, size_id) VALUES (3, 6, 6);"
ActiveRecord::Base.connection.execute "INSERT INTO product_instances (product_id, color_id, size_id) VALUES (4, 7, 7);"
ActiveRecord::Base.connection.execute "INSERT INTO product_instances (product_id, color_id, size_id) VALUES (4, 1, 1);"
ActiveRecord::Base.connection.execute "INSERT INTO product_instances (product_id, color_id, size_id) VALUES (5, 2, 2);"
ActiveRecord::Base.connection.execute "INSERT INTO product_instances (product_id, color_id, size_id) VALUES (5, 3, 3);"
ActiveRecord::Base.connection.execute "INSERT INTO product_instances (product_id, color_id, size_id) VALUES (6, 4, 4);"
ActiveRecord::Base.connection.execute "INSERT INTO product_instances (product_id, color_id, size_id) VALUES (6, 5, 5);"
ActiveRecord::Base.connection.execute "INSERT INTO product_instances (product_id, color_id, size_id) VALUES (7, 6, 6);"
ActiveRecord::Base.connection.execute "INSERT INTO product_instances (product_id, color_id, size_id) VALUES (7, 7, 7);"

ActiveRecord::Base.connection.execute "INSERT INTO roles (name) VALUES ('ADMIN');"
ActiveRecord::Base.connection.execute "INSERT INTO roles (name) VALUES ('USER');"

ActiveRecord::Base.connection.execute "INSERT INTO users (username, email, password, role_id) VALUES ('dim_ka_kao', 'dmytro@example.com', '1111', 1);"
ActiveRecord::Base.connection.execute "INSERT INTO users (username, email, password, role_id) VALUES ('creonluv', 'ivan@example.com', '1111', 1);"
ActiveRecord::Base.connection.execute "INSERT INTO users (username, email, password, role_id) VALUES ('pavlo.nenia', 'pavlo@example.com', '1111', 1);"
ActiveRecord::Base.connection.execute "INSERT INTO users (username, email, password, role_id) VALUES ('bhunter', 'volodymyr@example.com', '1111', 1);"
ActiveRecord::Base.connection.execute "INSERT INTO users (username, email, password, role_id) VALUES ('user1', 'user1@example.com', 'user1', 2);"
ActiveRecord::Base.connection.execute "INSERT INTO users (username, email, password, role_id) VALUES ('user2', 'user2@example.com', 'user2', 2);"
ActiveRecord::Base.connection.execute "INSERT INTO users (username, email, password, role_id) VALUES ('user3', 'user3@example.com', 'user3', 2);"
ActiveRecord::Base.connection.execute "INSERT INTO users (username, email, password, role_id) VALUES ( 'user4', 'user4@example.com', 'user4', 2);"

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

ActiveRecord::Base.connection.execute "INSERT INTO product_material_cares (category_id, name) VALUES (1, 'Description of category care 1');"
ActiveRecord::Base.connection.execute "INSERT INTO product_material_cares (category_id, name) VALUES (2, 'Description of category care 2');"
ActiveRecord::Base.connection.execute "INSERT INTO product_material_cares (category_id, name) VALUES (3, 'Description of category care 3');"
ActiveRecord::Base.connection.execute "INSERT INTO product_material_cares (category_id, name) VALUES (4, 'Description of category care 4');"
ActiveRecord::Base.connection.execute "INSERT INTO product_material_cares (category_id, name) VALUES (5, 'Description of category care 5');"
ActiveRecord::Base.connection.execute "INSERT INTO product_material_cares (category_id, name) VALUES (6, 'Description of category care 6');"
ActiveRecord::Base.connection.execute "INSERT INTO product_material_cares (category_id, name) VALUES (7, 'Description of category care 7');"
