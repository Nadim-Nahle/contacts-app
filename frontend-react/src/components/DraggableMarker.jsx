import React from 'react';

import { useRef, useState, useCallback, useMemo } from "react";
import {  Marker, Popup } from "react-leaflet";



const center = {
  lat: 33.89058508065576, 
  lng: 35.5052868259433
}

const DraggableMarker = () => {
  
        const draggable = true
        const [position, setPosition] = useState(center)
        const markerRef = useRef(null)
        const eventHandlers = useMemo(
          () => ({
            dragend() {
              const marker = markerRef.current
              if (marker != null) {
                setPosition(marker.getLatLng())
                var position = ((marker.getLatLng()))
                //console.log(position)
                localStorage.setItem('lat', position.lat)
                localStorage.setItem('lng', position.lng)
              }
            },
          }),
          [],
        )
               
        
  
  return (
    <>
      
      <Marker
              draggable={draggable}
              eventHandlers={eventHandlers}
              position={position}
              ref={markerRef}>
              <Popup minWidth={90}>
                
                  {draggable
                    ? 'Marker is draggable'
                    : 'Click here to make marker draggable'}
                
              </Popup>
            </Marker>
          )
      
    </>
    
  )
}

export default DraggableMarker;