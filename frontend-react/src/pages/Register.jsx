import React from "react";
import { Navigate } from 'react-router-dom';
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from '../api/axios';
import Google from '../components/Google';

const REGISTER_URL ='/api/v1/auth/register';



const Register = () => {

    
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');



    useEffect(() => {
        userRef.current.focus();
    }, [])

    
    useEffect(() => {
        setErrMsg('');
    }, [name, email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const response =await axios.post(REGISTER_URL, ({name, email, password})); 
            console.log(response?.data);
            
            if(response){
                console.log('navigating')
                return (<Navigate to="/login" />);
            }
            setName('');
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
                    <label htmlFor="email">Name</label>
                    <input type='text' id='name-login' className='form-control' name='name' onChange={(e) => setName(e.target.value)} value={name}/>

                    <label htmlFor="email">Email</label>
                    <input type='email' id='email-login' className='form-control' name='email' ref={userRef} onChange={(e) => setEmail(e.target.value)} value={email} />

                    <label htmlFor="email">Password</label>
                    <input type='password' id='password-login' className='form-control' name='password' onChange={(e) => setPassword(e.target.value)}  value={password}/>
                    <button className="signup-btn">Signup</button>
                    <Google />
                </div>
            </div>
            
            </form>
        </div>
        
    )
}


export default Register;