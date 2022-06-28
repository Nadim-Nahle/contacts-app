import React from 'react'
import { useRef, useState, useEffect } from "react";
import jwt_decode from "jwt-decode"
import axios from '../api/axios'
const REGISTER_URL ='/api/v1/auth/register';
const LOGIN_URL ='/api/v1/auth/login';




function Google() {

    const [name1, setName1] = useState({});
    const [email1, setEmail1] = useState({});
    
    function handleCallBackResponse(response){

        //console.log('ecncode jwt' + response.credential)
        var userObject = jwt_decode(response.credential)
        var newemail = (userObject.email)
        var newname = (userObject.given_name)
        console.log(userObject.email);
        setName1(newname);
        setEmail1(newemail);
        
        name1 ?
        
        handleSubmit() :
        <></>
        
    }
    const [errMsg, setErrMsg] = useState('');
    const errRef = useRef();
    

    const handleSubmit = async (e) => {
       
        
        var password = '123456';
        const name = ((name1));
        console.log(name)
        const email = ((email1));
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
        const email = ((email1));
        try{
            const response =await axios.post(LOGIN_URL, ({email, password})); 
            if(response){
                console.log('logged in')
            }
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
