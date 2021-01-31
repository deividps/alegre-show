import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UseAnimations from 'react-useanimations'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import { computeDistanceBetween } from 'spherical-geometry-js'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'

import { Carousel } from 'react-responsive-carousel'

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
   const history = useHistory()
   const [position, setPosition] = useState({ lat: 0, lng: 0 })
   const [distance, setDistance] = useState()
   const [event, setEvent] = useState()
   const [eventImages, setEventImages] = useState()
   const [reviews, setReviews] = useState()
   const [attractions, setAttractions] = useState()

   useEffect(() => {
      const pos = JSON.parse(localStorage.getItem('position'))

      if (!pos) {
         history.push('/landing')
      }

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

      setPosition(pos)
   }, [params.id])

   if (!event) {
      return <Loading />
   }

   function handleCalculateDistance(pos, ev) {
      if (!distance) {
         const calculateDistance = computeDistanceBetween(pos, {
            lat: ev.latitude,
            lng: ev.longitude
         })

         let formatted =
            Math.round((calculateDistance + Number.EPSILON) * 100) / 100
         if (calculateDistance > 500) {
            formatted =
               Math.round((formatted / 1000 + Number.EPSILON) * 100) / 100
            formatted += 'km'
         } else {
            formatted += 'm'
         }

         setDistance(formatted)
      }
   }

   return (
      <div id="event-container">
         <Navbar />
         <main>
            <div className="info">
               <Carousel>
                  {eventImages &&
                     eventImages.map(image => {
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
               {event && handleCalculateDistance(position, event)}
               <span>A {event && distance} de você.</span>
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
                        {event.title}
                        <a
                           href={`https://www.google.com/maps/dir/?api=1&destination=${event.latitude},${event.longitude}`}
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
                        <div className="review" key={review.id}>
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
