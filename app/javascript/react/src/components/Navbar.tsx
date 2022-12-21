import React from 'react'
import { useUserAuth } from '../helpers/UserAuthContext'
import { useNavigate } from 'react-router'

const Navbar = () => {
    const navigate = useNavigate()
    const { user, logOut, logIn, signUp} = useUserAuth()
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item" href = {"https://github.com/nikhil-dronamraju"}>
                    GitHub
                </a>
                <a className="navbar-item" href = {"https://nikhildronamraju-next-portfolio.vercel.app"}>
                    Portfolio
                </a>

                <div className="navbar-item has-dropdown is-hoverable">
                    <div className='navbar-link'>
                        Contact Me
                    </div>

                    <div className="navbar-dropdown">
                        <a className="navbar-item">
                            650-862-8927
                        </a>
                        <a className="navbar-item">
                            nikhil.dronamraju.0917@gmail.com
                        </a>
                </div>
            </div>
        </div>
        <div className="navbar-end">
            <div className="navbar-item">
                { user &&   
                    <div className='buttons'>
                        <button onClick={() => {
                            logOut()
                            navigate("/")
                            }} className="button is-primary">
                            <strong>Log Out</strong>
                        </button>
                    </div>
                }
                {!user &&
                    <div className='buttons'>
                        <button onClick={() => {
                            navigate("/")
                            }} className="button">
                            <strong>Log In</strong>
                        </button>
                        <button onClick={() => {
                            navigate("/users/sign_up")
                            }} className="button">
                            <strong>Sign Up</strong>
                        </button>
                    </div>
                }
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar