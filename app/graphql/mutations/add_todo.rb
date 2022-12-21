module Mutations
    class AddTodo < BaseMutation
        argument :action, String, required: true
        argument :deadline, String, required: true
        argument :important, Boolean, required: true
        argument :urgent, Boolean, required: true
        argument :email, String, required: true


        type Types::TodoType

        def resolve(action: nil, deadline: nil, important: nil, urgent: nil, email: nil)
            Todo.create(
                action: action, 
                deadline: deadline,
                important: important,
                urgent: urgent,
                email: email,
            )
        end
    end
end