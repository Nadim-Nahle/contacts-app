import React from 'react';
import { useState } from 'react';

const Contacts = ({ contacts}) => {
    //console.log(contacts)
    const[filter, setFilter] = useState('');

  return (
    <>  <div className="search">
            <input type="text" id='searchInput' placeholder='search here...' onChange={(e)=>{
                setFilter(e.target.value);
            }}/>
        </div>
        <ul>  
            {contacts.filter(val=>{
              if(filter === '') {
                return val;
              }
              else if(
                val.fname.toLowerCase().includes(filter.toLowerCase()) ||
                val.phone.toLowerCase().includes(filter.toLowerCase()) ||
                val.email.toLowerCase().includes(filter.toLowerCase()) ||
                val.relation.toLowerCase().includes(filter.toLowerCase()) 
              )
                return val;
              
            }).map((contacts) =>
            <li key={contacts._id}>
                name: {contacts.fname}{' '} 
                phone: {contacts.phone }{' '}
                email: {contacts.email }{' '}
                reation status: {contacts.relation}{' '}
            </li>
            )}
        </ul>
    </>
    
  )
}

export default Contacts