module Mutations
    class EditTodo < BaseMutation
        argument :todo_id, ID, required: true
        argument :action, String, required: true
        argument :deadline, String, required: true
        argument :important, Boolean, required: true
        argument :urgent, Boolean, required: true


        type Types::TodoType

        def resolve(todo_id: nil, action: nil, deadline: nil, important: nil, urgent: nil)
            Todo.update(
                todo_id, :action => action, 
                :deadline => deadline, 
                :important => important, 
                :urgent => urgent
            )
        end
    end
end