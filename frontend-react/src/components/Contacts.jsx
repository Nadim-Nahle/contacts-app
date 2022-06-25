import React from 'react'

const Contacts = ({ contacts}) => {
  return (
    <ul>
        {contacts.map((contacts) => 
        <li>
            name: {contacts.fname}{' '} 
            phone: {contacts.phone }{' '}
            email: {contacts.email }{' '}
            reation status: {contacts.relation}{' '}
        </li>
        )}
    </ul>
  )
}

export default Contacts