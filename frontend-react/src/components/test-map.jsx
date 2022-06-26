import React from 'react'
import { GoogleMap, LoadScript, DrawingManager } from '@react-google-maps/api';


const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent( ) {
    const onLoad = drawingManager => {
        console.log(drawingManager)
      }
      
        const onPolygonComplete = polygon => {
          console.log(polygon)
      }
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAvRlAe0Nohd5zLFHVsk4z43kjDy6bZD84"
      libraries={["drawing"]}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <> <DrawingManager
      onLoad={onLoad}
      onPolygonComplete={onPolygonComplete}
    /></>
      </GoogleMap>
    </LoadScript>
  ) 
}

export default MyComponent;