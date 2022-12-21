import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useUserAuth } from "../helpers/UserAuthContext";
import Navbar from './Navbar';
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
      alert(err.message)
    }
  };

 
  return (
    <div> 
        <Navbar/>                 
        <h1 className = 'is-size-2'> Welcome! </h1> 
        <h4 className = 'is-size-6 is-italic'>Sign up to get started: </h4>                                                                           
        <form onSubmit={handleSubmit} className='is-pulled-left'>                                                                                            
            <div>
                <div className="field">
                    <label className="label" htmlFor="email-address">
                        Email address: 
                    </label>
                    <div className='control'>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}  
                            required                                    
                            placeholder="Email address"
                            className="input"                                
                        />
                    </div>
                </div>
            </div>

            <div>
                <div className='field'>
                    <label className='label' htmlFor="password">
                        Password:
                    </label>
                    <div className='control'>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            required                                 
                            placeholder="Password"   
                            className='input'           
                        />
                    </div>
                </div>
            </div>                                             
            
            <button type="submit" className='button'>  
                Sign up                                
            </button>
            <p>
                Already have an account?{' '}
                <NavLink to="/" >
                    Sign in
                </NavLink>
            </p>                                                           
        </form>        
    </div>
  )
}
 
export default Signup