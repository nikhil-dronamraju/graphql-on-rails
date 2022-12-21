module Mutations
    class DeleteTodo < BaseMutation
        argument :todo_id, ID, required: true


        type Types::TodoType

        def resolve(todo_id: nil)
            Todo.find(todo_id).delete
        end
    end
end