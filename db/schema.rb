# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_05_23_183600) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_admin_comments", force: :cascade do |t|
    t.string "namespace"
    t.text "body"
    t.string "resource_type"
    t.bigint "resource_id"
    t.string "author_type"
    t.bigint "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author"
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace"
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource"
  end

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "admin_users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admin_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true
  end

  create_table "cart_items", force: :cascade do |t|
    t.bigint "shopping_cart_id", null: false
    t.bigint "product_instances_id", null: false
    t.integer "quantity"
    t.index ["product_instances_id"], name: "index_cart_items_on_product_instances_id"
    t.index ["shopping_cart_id"], name: "index_cart_items_on_shopping_cart_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
  end

  create_table "colors", force: :cascade do |t|
    t.string "name"
  end

  create_table "genders", force: :cascade do |t|
    t.string "name"
  end

  create_table "input_products", force: :cascade do |t|
    t.integer "quantity"
    t.float "cost"
    t.date "date_received"
    t.bigint "product_instance_id", null: false
    t.index ["product_instance_id"], name: "index_input_products_on_product_instance_id"
  end

  create_table "orders", force: :cascade do |t|
    t.date "date_submission"
    t.date "date_completion"
    t.date "date_payment"
    t.bigint "shopping_cart_id", null: false
    t.index ["shopping_cart_id"], name: "index_orders_on_shopping_cart_id"
  end

  create_table "output_products", force: :cascade do |t|
    t.integer "quantity"
    t.float "cost"
    t.date "date_sell"
    t.bigint "product_instance_id", null: false
    t.index ["product_instance_id"], name: "index_output_products_on_product_instance_id"
  end

  create_table "payments", force: :cascade do |t|
    t.date "payment_date"
    t.string "payment_method"
    t.integer "amount"
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_payments_on_user_id"
  end

  create_table "producers", force: :cascade do |t|
    t.string "name"
  end

  create_table "product_instances", force: :cascade do |t|
    t.bigint "color_id", null: false
    t.bigint "size_id", null: false
    t.bigint "product_id", null: false
    t.integer "quantity", default: 0, null: false
    t.index ["color_id"], name: "index_product_instances_on_color_id"
    t.index ["product_id"], name: "index_product_instances_on_product_id"
    t.index ["size_id"], name: "index_product_instances_on_size_id"
  end

  create_table "product_material_cares", force: :cascade do |t|
    t.string "name"
    t.bigint "category_id", null: false
    t.index ["category_id"], name: "index_product_material_cares_on_category_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.bigint "category_id", null: false
    t.bigint "producer_id", null: false
    t.string "description"
    t.float "price"
    t.integer "main_photo_id"
    t.bigint "gender_id", null: false
    t.index ["category_id"], name: "index_products_on_category_id"
    t.index ["gender_id"], name: "index_products_on_gender_id"
    t.index ["producer_id"], name: "index_products_on_producer_id"
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
  end

  create_table "shipments", force: :cascade do |t|
    t.date "shipping_date"
    t.bigint "order_id", null: false
    t.string "tracking_number"
    t.index ["order_id"], name: "index_shipments_on_order_id"
  end

  create_table "shopping_carts", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_shopping_carts_on_user_id"
  end

  create_table "sizes", force: :cascade do |t|
    t.string "name"
  end

  create_table "user_profiles", force: :cascade do |t|
    t.string "name"
    t.string "surname"
    t.string "phone_number"
    t.string "country"
    t.string "state"
    t.string "city"
    t.string "street"
    t.string "apartment"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password"
    t.bigint "role_id", null: false
    t.integer "photo_id"
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["role_id"], name: "index_users_on_role_id"
  end

  create_table "wishlists", id: false, force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "product_id", null: false
    t.index ["user_id", "product_id"], name: "index_wishlists_on_user_id_and_product_id", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "cart_items", "product_instances", column: "product_instances_id"
  add_foreign_key "cart_items", "shopping_carts"
  add_foreign_key "input_products", "product_instances"
  add_foreign_key "orders", "shopping_carts"
  add_foreign_key "output_products", "product_instances"
  add_foreign_key "payments", "users"
  add_foreign_key "product_instances", "colors"
  add_foreign_key "product_instances", "products"
  add_foreign_key "product_instances", "sizes"
  add_foreign_key "product_material_cares", "categories"
  add_foreign_key "products", "categories"
  add_foreign_key "products", "genders"
  add_foreign_key "products", "producers"
  add_foreign_key "shipments", "orders"
  add_foreign_key "shopping_carts", "users"
  add_foreign_key "users", "roles"
  add_foreign_key "wishlists", "products"
  add_foreign_key "wishlists", "users"
end
