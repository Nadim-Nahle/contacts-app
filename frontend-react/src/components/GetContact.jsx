import React from 'react'
import { useState, useEffect } from 'react'
import axios from '../api/axios';

const CONTACT_URL ='/api/v1/auth/contacts';

const GetContact = () => {

    const[contacts, setContacts] = useState([null]);
    
    useEffect(()=>{

        var jwt = localStorage.getItem('token');

        axios.get(CONTACT_URL,{
            headers: {'Authorization': 'Bearer '+jwt}
        })

        .then( (result) => {
            //console.table(result.data);
            setContacts(result.data);
        });

    }, []);

    return (
        <div>
            {contacts ? <div>Contacts</div> : <div>No Contacts</div>}
        </div>

    )
}

export default GetContact