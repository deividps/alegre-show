import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Map, TileLayer, Marker } from 'react-leaflet'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import markerIcon from '../../utils/markerIcon'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

export default function Landing() {
   const [position, setPosition] = useState({ lat: 0, lng: 0 })

   const history = useHistory()

   function handleNavigateToHomePage() {
      if (position.lat !== 0) {
         localStorage.setItem('position', JSON.stringify(position))

         history.push('/')
      }
   }

   function handleMapClick(e) {
      const { lat, lng } = e.latlng

      setPosition({ lat, lng })
   }

   return (
      <div id="landing-container">
         <Navbar />
         <main>
            <div className="select-position">
               <h3>Selecione sua posição no mapa.</h3>
               <Map
                  center={[-20.764443, -41.5368899]}
                  zoom={15}
                  style={{ width: '100%', height: '100%' }}
                  onClick={handleMapClick}
               >
                  <TileLayer
                     url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoicnlhbm1hdHRvcyIsImEiOiJja2llcDMxMHgwZWV4MnBxd3VkeXFvcTI4In0.uRDTBT6TGyiSIiIoCzzfXw`}
                     opacity={1}
                     zIndex={10}
                  />
                  {position.lat !== 0 && (
                     <Marker
                        interactive={false}
                        icon={markerIcon}
                        position={[position.lat, position.lng]}
                     />
                  )}
               </Map>
            </div>
            <button
               onClick={handleNavigateToHomePage}
               disabled={position.lat === 0}
               className={position.lat === 0 ? 'disabled' : 'clickable'}
            >
               <FontAwesomeIcon icon={faArrowRight} />
            </button>
         </main>
         <Footer />
      </div>
   )
}
