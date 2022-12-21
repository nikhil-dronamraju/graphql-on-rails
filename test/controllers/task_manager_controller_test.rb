require "test_helper"

class TaskManagerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get task_manager_index_url
    assert_response :success
  end
end
