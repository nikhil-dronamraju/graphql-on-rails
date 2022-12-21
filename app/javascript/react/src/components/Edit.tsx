import React from 'react'
import { useState } from 'react'
import { editTodo } from '../helpers/graphql_helpers'
import { useMutation } from '@apollo/client'
import { useNavigate, useParams, } from 'react-router-dom'

const Edit = () => {
    const { editId } = useParams()
    const todoId = editId
    const [action, setAction] = useState('')
    const [deadline, setDeadline] = useState('')
    const [important, setImportant] = useState(false)
    const [urgent, setUrgent] = useState(false)
    const [EditTodo, {loading, error, data}] = useMutation(editTodo)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        EditTodo({
            variables:{
                id: todoId,
                action,
                deadline,
                important,
                urgent
            }
        }).then(() => window.location.href = "/task_manager/index")
    }
    return (
        <div>
            <form className='is-pulled-left'
                onSubmit={handleSubmit}>
                    <div className='field'>
                        <label className='label'>Enter Task:
                            <div className='control'>
                                <input className='input' required placeholder='Task...' onChange={(e) => {setAction(e.target.value)}}/>
                            </div> 
                        </label>
                    </div>
                    <div className='field'>
                        <label className='label'>Enter deadline: 
                            <input className='input' required name = "deadline" placeholder='deadline' type = {'date'} onChange={(e) => {setDeadline(e.target.value)}}/>
                        </label>
                    </div>
                    <div className='field'>
                        <label className='checkbox'>Important?
                            <input className='checkbox' type = {'checkbox'} onChange = {(e) => {setImportant(e.target.checked)}}/>
                        </label>
                    </div>
                    <div className='field'>
                        <label className='checkbox'>Urgent? 
                            <input className='checkbox' placeholder = 'urgent...?' type = {'checkbox'} onChange = {(e) => {setUrgent(e.target.checked)}}/>
                        </label>
                    </div>
                    <button className='button' type='submit'>
                        Submit
                    </button>
          </form>
        </div>
    )
}

export default Edit