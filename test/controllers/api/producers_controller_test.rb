require "test_helper"

class Api::ProducersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_producers_index_url
    assert_response :success
  end

  test "should get show" do
    get api_producers_show_url
    assert_response :success
  end
end
