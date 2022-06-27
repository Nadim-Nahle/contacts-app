import React from 'react'
import { MapContainer, TileLayer,Marker,Popup } from "react-leaflet";
const NewMap = () => {

    var lat = localStorage.getItem('lat');
    var lng = localStorage.getItem('lng');

    const position = [lat, lng]


  return (
    < div className="newmap-center">
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
    </div>
  )
}

export default NewMap