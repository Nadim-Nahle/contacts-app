import React from 'react'
import { useRef, useState, useEffect } from "react";
import axios from '../api/axios';
import GetContact from '../components/GetContact';
import Leaflet from '../components/Leaflet';

const ADDCONTACT_URL ='/api/v1/auth/addcontact';

const Contact = () => {


  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [phone, setPhone] = useState('');
  const [relation, setRelation] = useState('');
  const [lat, setLat] = useState('');
  const [lng, seLng] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const [map, setMap] = useState(false);
  const [showMap, setshowMap] = useState(false);

  const [newContact, setNewContact] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const userRef = useRef();
  const errRef = useRef();

  

  useEffect(() => {
    setErrMsg('');
  }, [fname, email, phone]);

  const handleRefresh = async (e) => {
    e.preventDefault();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    var jwt = localStorage.getItem('token');
    var lat = localStorage.getItem('lat');
    var lng = localStorage.getItem('lng');

    //console.log(lat);
    //console.log(lng);
    try{

      const response = await axios.post(ADDCONTACT_URL, ({fname, phone, email, relation, lat, lng}),
      {
        headers: {'Authorization': 'Bearer '+jwt}
      }); 

      console.log(response?.data)
      alert('Contact Added!')
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
    <>
    <div id="show-btn">
    <button className="show-btn" onClick={() => {setNewContact(!newContact); setShowContact(!showContact)}}>{showContact ? 'Show Contacts' : 'Add new Contacts'} </button>
    </div> 
    {newContact ?
    !map?
    <div className="form-centre" >
      
            <form onClick={handleRefresh} className="signup-form">
            <div className="newform">
            
                <h1>Create Contact</h1>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <div className='txt_field'>

                    <label htmlFor="email">Full Name</label>
                    <input type='fname' id='fname-login' className='form-control' name='fname'  onChange={(e) => setFname(e.target.value)} value={fname} ref={userRef} />

                    <label htmlFor="email">Phone</label>
                    <input type='text' id='phone-login' className='form-control' name='phone'  onChange={(e) => setPhone(e.target.value)} value={phone} />

                    <label htmlFor="email">Email</label>
                    <input type='email' id='email-login' className='form-control' name='email'  onChange={(e) => setEmail(e.target.value)} value={email} />

                    <label htmlFor="email">Relation Status</label>
                    <input type='text' id='relation-login' className='form-control' name='relation' onChange={(e) => setRelation(e.target.value)}  value={relation}/>
                    <button onClick={handleSubmit} className="signup-btn">Add</button>
                    <button  className="locs-btn" onClick={() => {setMap(!map); setshowMap(!showMap)}}> {showMap ? 'finsih' : 'Add location'} </button>
                </div>
            </div>

            
            </form>
            
        </div> :<button className="loc-btn" onClick={() => {setMap(!map); setshowMap(!showMap)}}>finish</button>: <GetContact />}
        {
          map?
          <Leaflet /> :  '.'
        }
        
        
    </>
    
  )
}

export default Contact;