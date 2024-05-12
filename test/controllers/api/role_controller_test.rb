require "test_helper"

class Api::RoleControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_role_index_url
    assert_response :success
  end

  test "should get show" do
    get api_role_show_url
    assert_response :success
  end

  test "should get create" do
    get api_role_create_url
    assert_response :success
  end
end
