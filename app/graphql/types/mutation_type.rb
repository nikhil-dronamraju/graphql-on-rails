module Types
  class MutationType < Types::BaseObject
    field :add_todo, mutation: Mutations::AddTodo
    field :edit_todo, mutation: Mutations::EditTodo
    field :delete_todo, mutation: Mutations::DeleteTodo
  end
end
