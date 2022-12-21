require "test_helper"

class TasksControllerTest < ActionDispatch::IntegrationTest
  test "should get edit" do
    get tasks_edit_url
    assert_response :success
  end
end
