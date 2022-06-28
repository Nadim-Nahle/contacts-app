import React from "react";
import DraggableMarker from "./DraggableMarker";
import { MapContainer, TileLayer } from "react-leaflet";

const Leaflet = () => {
  return (
    <div className="map-center">
        <h1>Drag the pin to choose your location </h1>
      <MapContainer center={[33.89058508065576, 35.5052868259433]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <DraggableMarker /> 
      </MapContainer>
      
    </div>
  );
};

export default Leaflet;
