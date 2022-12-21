import React from 'react'
import { useQuery, gql, useMutation } from '@apollo/client'
import { QueueFourData, QueueOneDeletion } from '../helpers/graphql_helpers'
import { useNavigate } from 'react-router'



const QueueFour = ({ email }) => {
  const navigate = useNavigate()
  
  const { loading, error, data } = useQuery(QueueFourData, {
    variables: {email},
  })

  const [deleteTodo] = useMutation(QueueOneDeletion)
  
  if (loading) return <div>'Loading screen component would go here'</div>;
  else if (error) return <div>`Error! ${error.message}`</div>;
  return (
    <div>
      <h1 className='is-size-3'>Not Important/Not Urgent</h1>
      <table className="table is-bordered is-striped is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th scope="col">Action</th>
            <th scope="col">Deadline</th>
            <th scope="col">Edit</th>
            <th scope = "col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.allTodos.map((todo, index) => {
            return (
            <tr key={`Queue Four ${index}`}>
              <th scope="row">{todo.action}</th>
              <td>{todo.deadline}</td>
              <td><button onClick = {() => {navigate(`/tasks/${todo.id}`)}}>Edit</button></td>
              <td><button onClick = {
                () => {
                  deleteTodo({
                    variables: {
                      todoId: todo.id
                    }
                  })
                  window.location.reload()
                }
              }>Delete</button></td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default QueueFour