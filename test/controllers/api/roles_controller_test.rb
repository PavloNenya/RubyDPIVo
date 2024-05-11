require "test_helper"

class Api::RolesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_roles_index_url
    assert_response :success
  end

  test "should get show" do
    get api_roles_show_url
    assert_response :success
  end
end
