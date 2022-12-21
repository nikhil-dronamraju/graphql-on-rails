require "test_helper"

class SigninControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get signin_index_url
    assert_response :success
  end
end
