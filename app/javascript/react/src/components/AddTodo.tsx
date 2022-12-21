import React from 'react'
import { useState } from 'react'
import { useMutation, gql } from "@apollo/client"
import { AddTodoMutation } from '../helpers/graphql_helpers'


const AddTodo = (user) => {
    const [action, setAction] = useState('')
    const [deadline, setDeadline] = useState('')
    const [important, setImportant] = useState(false)
    const [urgent, setUrgent] = useState(false)
    const [addTodo, {loading, data, error}] = useMutation(AddTodoMutation)
    return (
        <div>
            <form className='d-inline-flex justify-content-around w-100'  
                    onSubmit= {(e) => {
                        e.preventDefault()
                        addTodo({
                            variables:{
                                action: action,
                                important: important,
                                urgent: urgent,
                                deadline: deadline,
                                email: String(user.user)
                            }
                        })
                        window.location.reload()
                    }}>
                    <div className='field'>
                        <label htmlFor="action" className='label'>Enter Task: </label>
                        <div className='control'>
                            <input className='input' required placeholder='Task...' onChange={(e) => {setAction(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='field'>
                        <label className = 'label' htmlFor = "deadline">Enter deadline: </label>
                        <div className='control'>
                            <input className='input'  name = "deadline" placeholder='deadline' type = {'date'} onChange={(e) => {setDeadline(e.target.value)}} required = {true}/>
                        </div>
                    </div>
                    <div>
                        <label className='checkbox'>
                            <input className = 'checkbox' type = {'checkbox'} onChange = {(e) => {setImportant(e.target.checked)}}/>
                            Important? {`   `}
                        </label>
                        <br/>
                        <label className='checkbox'>
                            <input className='checkbox' placeholder = 'urgent...?' type = {'checkbox'} onChange = {(e) => {setUrgent(e.target.checked)}}/>
                            Urgent? {'   '}
                        </label>
                    </div>
                    <button className='button'>Submit</button>
                    <br/>
          </form>
        </div>
    )
}

export default AddTodo