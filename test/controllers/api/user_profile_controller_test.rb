require "test_helper"

class Api::UserProfileControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_user_profile_index_url
    assert_response :success
  end

  test "should get show" do
    get api_user_profile_show_url
    assert_response :success
  end

  test "should get create" do
    get api_user_profile_create_url
    assert_response :success
  end
end
