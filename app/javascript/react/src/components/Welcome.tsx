import React from 'react'
import QueueOne from './QueueOne'
import QueueTwo from './QueueTwo'
import QueueThree from './QueueThree'
import QueueFour from './QueueFour'
import AddTodo from './AddTodo'
import Navbar from './Navbar'
import { useNavigate } from 'react-router'
import { useUserAuth } from "../helpers/UserAuthContext";


const Welcome = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
      await logOut();
      navigate("/");
  };


return (
    <div id="Welcome">
        <Navbar/>
        <div className='columns'>
        <div className = "column">
          <AddTodo user = {user.email}/>
        </div>
        <section className='column'>
          <QueueOne email={user.email}/>
          <QueueTwo email={user.email}/>
          <QueueThree email={user.email}/>
          <QueueFour email = {user.email}/>
        </section>
        </div>

    </div>
  )
}

export default Welcome