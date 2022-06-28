import React from 'react'
import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import jwt_decode from "jwt-decode"
import axios from '../api/axios'
import useAuth from "../hooks/useAuth";


const REGISTER_URL ='/api/v1/auth/register';
const LOGIN_URL ='/api/v1/auth/login';



function Google() {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    
    const { setAuth } = useAuth();
    
    function handleCallBackResponse(response){

        //console.log('ecncode jwt' + response.credential)
        var userObject = jwt_decode(response.credential)
        console.log(userObject)

        
        localStorage.setItem('name',(userObject.given_name));
        localStorage.setItem('email',(userObject.email));
        

        
        
        //console.log(userObject.email);
        
        const name = localStorage.getItem('name');
         
        name  ?
        
        handleSubmit() :
        <></>
        
    }
    const [errMsg, setErrMsg] = useState('');
    const errRef = useRef();
    //console.log(name)
    //console.log(email)

    const handleSubmit = async (e) => {
       
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        var password = '123456';
        
        console.log(name) 
        
        console.log(email)
        try{
            const response =await axios.post(REGISTER_URL, ({name, email, password})); 
            console.log(response?.data);
            
            if(response){
                console.log('navigating')
                
                handleLogin();
                
            }
    


        } catch (err){
            setErrMsg('email already exits');
            
        }

        
    }

    const handleLogin= async (e) =>{
        var password = '123456';
        
        const email = localStorage.getItem('email');
        try{
            const response =await axios.post(LOGIN_URL, ({email, password}));
            const jwt = (response?.data.secret_token);
            localStorage.setItem('token', jwt); 
            
            console.log('logged in')
            setAuth({email, password})
            navigate(from, { replace: true });
            
        }
        catch (err){
            
        }
    }

 
    


    useEffect(() => {

        /* global google */
        google.accounts.id.initialize({
            client_id: "80248917396-m4ihiqea2hs9ltjbri1j8lurko6710m7.apps.googleusercontent.com",
            callback: handleCallBackResponse
        });


        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: 'outline', size:"large"}
        )
    }, []);
    

  return (
    <>  
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <div id="signInDiv"></div>
    </>
    
  )
}

export default Google;
