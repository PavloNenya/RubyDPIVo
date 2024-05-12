require "test_helper"

class Api::ShoppingCartControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_shopping_cart_show_url
    assert_response :success
  end

  test "should get index" do
    get api_shopping_cart_index_url
    assert_response :success
  end

  test "should get create" do
    get api_shopping_cart_create_url
    assert_response :success
  end
end
