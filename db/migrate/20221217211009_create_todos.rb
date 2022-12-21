class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos do |t|
      t.string :action
      t.date :deadline
      t.boolean :important
      t.boolean :urgent

      t.timestamps
    end
  end
end
