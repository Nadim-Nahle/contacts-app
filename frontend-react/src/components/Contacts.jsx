import React from 'react';
import { useState } from 'react';
import { MapContainer, TileLayer,Marker,Popup } from "react-leaflet";


function NewMap(lat,lng) {



  const position = [lat, lng]


return (
  
  <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>

)

}

const Contacts = ({ contacts}) => {

  const [map, setMap] = useState(false);
  const [showMap, setshowMap] = useState(false);
    //console.log(contacts)
    const[filter, setFilter] = useState('');

  return (
    <>  <div className="search">
            <input type="text" id='searchInput' placeholder='search here...                                🔍 ' onChange={(e)=>{
                setFilter(e.target.value);
            }}/>
            
        </div>
        <ul className='ul'>  
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
              <span class='style'>
                name: {contacts.fname}{' -- '} 
                phone: {contacts.phone }{' -- '}
                email: {contacts.email }{' -- '}
                reation status: {contacts.relation}
                {<button  className="locs-btn" onClick={() => {setMap(!map); setshowMap(!showMap)}}> {showMap ? 'finsih' : 'show location'} </button>}
                {
                  map ? 
                  
                  NewMap(contacts.lat, contacts.lng)
                
                   : '.'
                }
                </span>
            </li>
            )}
        </ul>
    </>
    
  )
}

export default Contacts