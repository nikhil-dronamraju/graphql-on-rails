import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../helpers/firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
 
const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/task_manager/index")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <div> 
            <Navbar/>                                           
            <h4 className='is-size-4'> Sign In </h4>                                                                  
            <form className='is-pulled-left'>                                              
                <div className='field'>
                    <div className='label'>
                        <label htmlFor="email-address">
                            Email address:
                        </label>
                    </div>
                    <div className='control'>
                        <input
                            id="email-address"
                            name="email"
                            type="email"                                    
                            required                                                                                
                            placeholder="Email address"
                            onChange={(e)=>setEmail(e.target.value)}
                            className='input'
                        />
                    </div>
                </div>

                <div>
                    <div className='field'>
                        <label htmlFor="password" className='label'>
                            Password:
                        </label>
                        <div className='control'>
                            <input
                                id="password"
                                name="password"
                                type="password"                                    
                                required                                                                                
                                placeholder="Password"
                                className='input'
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                                    
                <div>
                    <button onClick={onLogin} className='button'>      
                        Login                                                                  
                    </button>
                </div> 
                            
                <p>
                    No account yet? {' '}
                    <NavLink to="/users/sign_up">
                        Sign up
                    </NavLink>
                </p>                              
            </form>

                                        
        </div>
    )
}
 
export default Signin