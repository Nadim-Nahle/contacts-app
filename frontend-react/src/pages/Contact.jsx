import React from 'react'
import { useRef, useState, useEffect } from "react";
import axios from '../api/axios';

const ADDCONTACT_URL ='/api/v1/auth/addcontact';

const Contact = () => {


  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [phone, setPhone] = useState('');
  const [relation, setRelation] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const userRef = useRef();
  const errRef = useRef();

  useEffect(() => {
    userRef.current.focus();
}, [])

useEffect(() => {
  setErrMsg('');
}, [fname, email, phone])

  const handleSubmit = async (e) => {
    e.preventDefault();
    var jwt = localStorage.getItem('token');
    try{

      const response = await axios.post(ADDCONTACT_URL, ({fname, phone, email, relation}),
      {
        headers: {'Authorization': 'Bearer '+jwt}
      }); 

      console.log(response?.data)
    }
    catch(err){
      if(!err?.response){
        setErrMsg('No server response');
    }
    else if (err.response?.status === 500){
        setErrMsg('please choose different email and phone')
    }
    else if (err.response?.status === 400){
        setErrMsg('No Authentication')
    }
    else{
        setErrMsg('Login Failed');
    }
    errRef.current.focus();
    }
  }
  


  return (
    <div className="form-centre" onSubmit={handleSubmit}>
            <form className="signup-form">
            <div className="newform">
            
                <h1>Create Contact</h1>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <div className='txt_field'>

                    <label htmlFor="email">fname</label>
                    <input type='fname' id='fname-login' className='form-control' name='fname'  onChange={(e) => setFname(e.target.value)} value={fname} ref={userRef} />

                    <label htmlFor="email">Phone</label>
                    <input type='text' id='phone-login' className='form-control' name='phone'  onChange={(e) => setPhone(e.target.value)} value={phone} />

                    <label htmlFor="email">Email</label>
                    <input type='email' id='email-login' className='form-control' name='email'  onChange={(e) => setEmail(e.target.value)} value={email} />

                    <label htmlFor="email">relation</label>
                    <input type='text' id='relation-login' className='form-control' name='relation' onChange={(e) => setRelation(e.target.value)}  value={relation}/>
                    <button className="signup-btn">Add</button>
                </div>
            </div>
            
            </form>
        </div>
  )
}

export default Contact;