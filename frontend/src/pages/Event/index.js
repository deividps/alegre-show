import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UseAnimations from 'react-useanimations'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Carousel } from 'react-responsive-carousel'

import eventImg from '../../images/so-track-boa.jpg'
import vintageImg from '../../images/vintage.jpg'
import womanImg from '../../images/woman.jpg'
import woman2Img from '../../images/woman2.jpg'
import kvshImg from '../../images/kvsh.jpg'

import markerIcon from '../../utils/markerIcon'

import {
   faCalendarAlt,
   faClock,
   faStar
} from '@fortawesome/free-regular-svg-icons'

import { faTicketAlt, faGlassCheers } from '@fortawesome/free-solid-svg-icons'

import alertCircle from 'react-useanimations/lib/alertCircle'

import './styles.css'
import api from '../../services/api'

export default function Event() {
   const params = useParams()
   const [event, setEvent] = useState()
   const [eventImages, setEventImages] = useState()
   const [reviews, setReviews] = useState()
   const [attractions, setAttractions] = useState()

   useEffect(() => {
      async function fetch() {
         await api.get(`event/${params.id}`).then(response => {
            setEvent(response.data[0])
         })

         await api.get(`images/event/${params.id}`).then(response => {
            setEventImages(response.data)
         })

         await api.get(`reviews/event/${params.id}`).then(response => {
            setReviews(response.data)
         })

         await api.get(`attractions/event/${params.id}`).then(response => {
            setAttractions(response.data)
         })
      }
      fetch()
   }, [params.id])

   if (!event) {
      return <p>Loading...</p>
   }

   console.log(event)

   return (
      <div id="event-container">
         <Navbar />
         <main>
            <div className="info">
               <Carousel>
                  {eventImages &&
                     eventImages.map(image => {
                        return (
                           <div>
                              <img
                                 src={`http://localhost:3333/uploads/${image.image}`}
                                 alt={image.id}
                              />
                           </div>
                        )
                     })}
               </Carousel>
               <h2>{event.title}</h2>
               <p>{event.description}</p>
            </div>
            <div className="secondary-info">
               <div>
                  <FontAwesomeIcon icon={faClock} id="time" />
                  {event.start_hour}
               </div>
               <div>
                  <FontAwesomeIcon icon={faCalendarAlt} id="date" />
                  {event.start_date}
               </div>
               <div>
                  <FontAwesomeIcon icon={faTicketAlt} id="ticket" />
                  R$ {event.price}
               </div>
               <div>
                  <FontAwesomeIcon icon={faGlassCheers} id="open" />
                  {event.is_open_bar === 'true' ? 'Open Bar' : 'Sem Open Bar'}
               </div>
            </div>
            <div className="info ps">
               <h3 className="title">
                  <UseAnimations
                     animation={alertCircle}
                     size={34}
                     strokeColor="rgba(255, 49, 88, 0.4)"
                  />
                  Observações
               </h3>
               <p>{event.ps}</p>
            </div>
            <h2>Principais Atrações</h2>
            <div className="attractions-list">
               {attractions &&
                  attractions.map(attraction => {
                     return (
                        <div className="attraction" key={attraction.id}>
                           <img
                              src={`http://localhost:3333/uploads/${attraction.image}`}
                              alt={attraction.name}
                           />
                           <div className="attraction-info">
                              <h3>{attraction.name}</h3>
                              <p>{attraction.description}</p>
                           </div>
                        </div>
                     )
                  })}
            </div>
            <h2>Localização</h2>
            <div className="location">
               <Map
                  center={[event.latitude, event.longitude]}
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
                     position={[event.latitude, event.longitude]}
                  >
                     <Popup
                        closeButton={false}
                        minWidth={200}
                        maxWidth={200}
                        className="map-popup"
                     >
                        Dale
                        <a
                           href="https://www.google.com/maps/dir/?api=1&destination=-20.763148, -41.5317971"
                           target="_blank"
                           rel="noreferrer"
                        >
                           Ver no maps
                        </a>
                     </Popup>
                  </Marker>
               </Map>
            </div>
            <h2>Reviews</h2>
            <div className="reviews-list">
               {reviews &&
                  reviews.map(review => {
                     return (
                        <div className="review">
                           <img
                              src={`http://localhost:3333/uploads/${review.image}`}
                              alt={review.name}
                           />
                           <div className="review-info">
                              <h3>{review.name}</h3>
                              <span>
                                 <FontAwesomeIcon icon={faStar} />
                                 {review.rate}/10
                              </span>
                              <p>"{review.review}"</p>
                              <sub>
                                 - Entrevistada no {review.interviewed_at} do
                                 evento.
                              </sub>
                           </div>
                        </div>
                     )
                  })}
            </div>
         </main>
         <Footer />
      </div>
   )
}
