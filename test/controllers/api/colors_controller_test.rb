require "test_helper"

class Api::ColorsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_colors_index_url
    assert_response :success
  end

  test "should get show" do
    get api_colors_show_url
    assert_response :success
  end
end
