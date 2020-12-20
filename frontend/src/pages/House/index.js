import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from 'react-router-dom'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import raveImg from '../../images/rave.jpg'
import eventImg from '../../images/so-track-boa.jpg'

import markerIcon from '../../utils/markerIcon'

import {
   faCalendarAlt,
   faClock,
   faMoneyBillAlt,
   faStar,
   faBookmark,
   faCheckCircle
} from '@fortawesome/free-regular-svg-icons'

import api from '../../services/api'

import './styles.css'

export default function House() {
   const params = useParams()
   const [house, setHouse] = useState()
   const [houseImages, setHouseImages] = useState([])
   const [events, setEvents] = useState()
   const [eventImages, setEventImages] = useState()

   useEffect(() => {
      api.get(`house/${params.id}`).then(response => {
         setHouse(response.data[0])
      })

      api.get(`images/house/${params.id}`).then(response => {
         setHouseImages(response.data)
      })

      api.get(`event/byhouse/${params.id}`).then(response => {
         setEvents(response.data)
      })
   }, [params.id])

   if (!house && !houseImages) {
      return <p>Wait</p>
   }

   console.log(house, houseImages)

   return (
      <div id="house-container">
         <Navbar />
         <main>
            <div className="info">
               <Carousel>
                  {houseImages.map(image => {
                     return (
                        <div key={image.id}>
                           <img
                              src={`http://localhost:3333/uploads/${image.image}`}
                              alt={image.id}
                           />
                        </div>
                     )
                  })}
               </Carousel>

               <div className="images"></div>
               <h2>{house.name}</h2>
               <p>{house.description}</p>
            </div>
            <div className="secondary-info">
               <div>
                  <FontAwesomeIcon icon={faClock} id="openHour" />
                  {house.open_hour}
               </div>
               <div>
                  <FontAwesomeIcon icon={faCalendarAlt} id="open" />
                  {house.open_day}
               </div>
               <div>
                  <FontAwesomeIcon icon={faMoneyBillAlt} id="price" />
                  {house.price}
               </div>
               <div>
                  <FontAwesomeIcon icon={faStar} id="rate" />
                  {house.rate}
               </div>
            </div>
            <h2>Localização</h2>
            <div className="location">
               <Map
                  center={[house.latitude, house.longitude]}
                  zoom={15}
                  style={{ width: '100%', height: '100%' }}
               >
                  <TileLayer
                     url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoicnlhbm1hdHRvcyIsImEiOiJja2llcDMxMHgwZWV4MnBxd3VkeXFvcTI4In0.uRDTBT6TGyiSIiIoCzzfXw`}
                     opacity={1}
                     zIndex={10}
                  />
                  <Marker
                     key="1"
                     icon={markerIcon}
                     position={[house.latitude, house.longitude]}
                  >
                     <Popup
                        closeButton={false}
                        minWidth={200}
                        maxWidth={200}
                        className="map-popup"
                     >
                        {house.name}
                        <a
                           href={`https://www.google.com/maps/dir/?api=1&destination=${house.latitude},${house.longitude}`}
                           target="_blank"
                           rel="noreferrer"
                        >
                           Ver no maps
                        </a>
                     </Popup>
                  </Marker>
               </Map>
            </div>
            <h2>Eventos</h2>
            <div className="events-list">
               <div className="event">
                  <Carousel>
                     <div>
                        <img src={eventImg} alt="Evento" />
                     </div>
                     <div>
                        <img src={raveImg} alt="Evento" />
                     </div>
                  </Carousel>
                  <div className="event-info">
                     <h2>Só track boa</h2>
                     <p>30 dez 2020</p>
                  </div>
                  <p>Só xmaa no dale e bó usa lansa</p>
                  <div className="buttons">
                     <button id="interested">
                        <FontAwesomeIcon icon={faBookmark} />
                        Tenho interesse
                     </button>
                     <button id="going">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        Eu vou ir
                     </button>
                  </div>
               </div>
            </div>
         </main>
         <Footer />
      </div>
   )
}
