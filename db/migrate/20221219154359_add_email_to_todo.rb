class AddEmailToTodo < ActiveRecord::Migration[7.0]
  def change
    add_column :todos, :email, :string
  end
end
