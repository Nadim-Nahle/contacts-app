import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Marker from './Marker';

const Map = () => {
    const{ isLoaded } = useJsApiLoader({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY });

    if(!isLoaded) return <div>Loading...</div>;

  return (
    <NewMap />
  )


}
const center = {lat:33.377190, lng: 35.483590};
function NewMap(){

    
    return(
        <div className='map-centre'>
            <h1>Map</h1>
            <GoogleMap 
            zoom={10} 
            center={center}
            options={{ mapId: "86d0672c46786789" }}
            mapContainerClassName="map-container">
                <Marker />
            </GoogleMap>
        </div>
        
    )
}


export default Map;