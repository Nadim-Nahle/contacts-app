import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import axios from '../api/axios';

const REGISTER_URL ='/api/v1/auth/login';

const Register = () => {

    
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');



    useEffect(() => {
        userRef.current.focus();
    }, [])

    
    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const response =await axios.post(REGISTER_URL, ({email, password})); 
            //console.log(response?.data.secret_token);
            const jwt = (response?.data.secret_token);
            localStorage.setItem('token', jwt);
            //console.log(jwt)

            setAuth({email, password})
            navigate(from, { replace: true });
            setEmail('');
            setPassword('');

        } catch (err){
            if(!err?.response){
                setErrMsg('No server response');
            }
            else if (err.response?.status === 422){
                setErrMsg('missing email or pssword')
            }
            else if (err.response?.status === 401){
                setErrMsg('Incorrect email or password')
            }
            else{
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }

        
    }


    return(
        
        <div className="form-centre" onSubmit={handleSubmit}>
            <form className="signup-form">
            <div className="newform">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Register Form</h1>
                <div className='txt_field'>

                    <label htmlFor="email">Email</label>
                    <input type='email' id='email-login' className='form-control' name='email' ref={userRef} onChange={(e) => setEmail(e.target.value)} value={email} />

                    <label htmlFor="email">Password</label>
                    <input type='password' id='password-login' className='form-control' name='password' onChange={(e) => setPassword(e.target.value)}  value={password}/>
                    <button className="signup-btn">Login</button>
                </div>
            </div>
            
            </form>
        </div>
        
    )
}


export default Register;