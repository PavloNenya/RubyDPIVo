require "test_helper"

class Api::GenderControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_gender_index_url
    assert_response :success
  end

  test "should get show" do
    get api_gender_show_url
    assert_response :success
  end

  test "should get create" do
    get api_gender_create_url
    assert_response :success
  end
end
