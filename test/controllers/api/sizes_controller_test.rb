require "test_helper"

class Api::SizesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_sizes_index_url
    assert_response :success
  end

  test "should get show" do
    get api_sizes_show_url
    assert_response :success
  end
end
