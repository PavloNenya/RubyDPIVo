require "test_helper"

class Api::CartItemControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_cart_item_index_url
    assert_response :success
  end

  test "should get show" do
    get api_cart_item_show_url
    assert_response :success
  end

  test "should get create" do
    get api_cart_item_create_url
    assert_response :success
  end
end
