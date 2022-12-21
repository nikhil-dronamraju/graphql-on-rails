import { useQuery, useMutation, gql } from "@apollo/client"
import { useUserAuth } from "./UserAuthContext" 

export const AddTodoMutation = gql`
mutation AddTodo($action: String!, $deadline: String!, $important: Boolean!, $urgent: Boolean!, $email: String!){
    addTodo(action: $action, deadline: $deadline, important: $important, urgent: $urgent, email: $email){
        id
        action
        deadline
    }
}`

export const QueueOneData = gql`
  query QUERY($email: String!) {
    allTodos(email: $email, order: EARLIEST, important: true, urgent: true) {
      id
      action
      email
      deadline
      urgent
      important
    }
  }
  `

  export const QueueTwoData = gql`
  query QUERY($email: String!) {
    allTodos(email: $email, order: EARLIEST, important: true, urgent: false) {
      id
      action
      email
      deadline
      urgent
      important
    }
  }
  `

  export const QueueThreeData = gql`
  query QUERY($email: String!) {
    allTodos(email: $email, order: EARLIEST, important: false, urgent: true) {
      id
      action
      email
      deadline
      urgent
      important
    }
  }
  `

  export const QueueFourData = gql`
  query QUERY($email: String!) {
    allTodos(email: $email, order: EARLIEST, important: false, urgent: false) {
      id
      action
      email
      deadline
      urgent
      important
    }
  }
  `

export const QueueOneDeletion = gql`
  mutation DELETETODO($todoId: ID!) {
    deleteTodo(todoId: $todoId) {
      id
      action
    }
}
`

export const editTodo = gql`
mutation ($id: ID!, $action: String!, $deadline: String!, $urgent: Boolean!, $important: Boolean!) {
  editTodo(
    todoId: $id
    action: $action
    deadline: $deadline
    urgent: $urgent
    important: $important
  ) {
    id
  }
}

`
