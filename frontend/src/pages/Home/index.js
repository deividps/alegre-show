import React, { useEffect, useState } from 'react'
import UseAnimations from 'react-useanimations'
import { useHistory, Link } from 'react-router-dom'

import { computeDistanceBetween } from 'spherical-geometry-js'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import markerIcon from '../../utils/markerIcon'

import bookmark from 'react-useanimations/lib/bookmark'
import star from 'react-useanimations/lib/star'
import alertCircle from 'react-useanimations/lib/alertCircle'

import EventImg from '../../images/so-track-boa.jpg'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Event from '../../components/Event'
import Loading from '../../components/Loading'

import api from '../../services/api'

import './styles.css'

import Carousel from 'nuka-carousel'

console.log('Carousel', Carousel)
console.log('Event', Event)

export default function Home() {
   const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
   const [distance, setDistance] = useState()
   const history = useHistory()
   const [events, setEvents] = useState()
   const [houses, setHouses] = useState()

   useEffect(() => {
      api.get('events').then(response => {
         setEvents(response.data)
      })

      api.get('houses').then(response => {
         setHouses(response.data)
      })

      if (!localStorage.getItem('position')) {
         history.push('/landing')
      }

      const { lat, lng } = JSON.parse(localStorage.getItem('position'))

      setPosition({
         latitude: lat,
         longitude: lng
      })

      const calculateDistance = computeDistanceBetween(
         {
            lat,
            lng
         },
         {
            latitude: -20.754959481631797,
            longitude: -41.542656350213385
         }
      )

      setDistance(calculateDistance / 1000)
   }, [])

   if (!events && !houses) {
      return <Loading />
   }

   return (
      <div id="home-container">
         <Navbar />
         <main>
            <h2>Próximos Eventos</h2>
            <div className="events-list">
               <Carousel
                  slidesToShow={2}
                  slidesToScroll={1}
                  wrapAround="true"
                  transitionMode="scroll3d"
                  zoomScale="0.9"
                  opacityScale="0.4"
                  frameOverflow="visible"
                  withoutControls="true"
               >
                  {events &&
                     events.map(event => {
                        return (
                           <Event
                              id={event.id}
                              key={event.id}
                              title={event.title}
                              thumb={event.thumb_img}
                              description={event.description}
                              date={event.start_date}
                           />
                        )
                     })}
               </Carousel>
            </div>

            <h2>Mapa de Eventos</h2>
            <div className="location">
               <Map
                  center={[-20.754959481631797, -41.542656350213385]}
                  zoom={15}
                  style={{ width: '100%', height: '100%' }}
               >
                  <TileLayer
                     url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoicnlhbm1hdHRvcyIsImEiOiJja2llcDMxMHgwZWV4MnBxd3VkeXFvcTI4In0.uRDTBT6TGyiSIiIoCzzfXw`}
                     opacity={1}
                     zIndex={10}
                  />
                  {events &&
                     events.map(event => {
                        return (
                           <Marker
                              key={event.id}
                              icon={markerIcon}
                              position={[event.latitude, event.longitude]}
                           >
                              <Popup
                                 closeButton={false}
                                 minWidth={200}
                                 maxWidth={200}
                                 className="map-popup"
                              >
                                 <span>{event.title}</span>
                                 <Link to={`/event/${event.id}`}>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                 </Link>
                              </Popup>
                           </Marker>
                        )
                     })}
               </Map>
            </div>
            {/* <article className="news">
               <header>
                  <img src={EventImg} alt="evento" />
               </header>
               <main>
                  <h2>Só Track Boa Festival</h2>
                  <p>
                     Organizado pelo DJ Vintage Cultura, o Só Track Boa é um...
                  </p>
               </main>
               <footer className="news-button-container">
                  <button id="interested">
                     <UseAnimations
                        animation={bookmark}
                        size={20}
                        strokeColor="#ff3158"
                        loop={true}
                        reverse={true}
                        speed={0.2}
                     />
                     <span> Tenho interesse</span>
                  </button>
                  <button id="going">
                     <UseAnimations
                        animation={star}
                        size={20}
                        strokeColor="#02e345"
                        loop={true}
                        speed={0.2}
                     />
                     <span> Eu vou ir</span>
                  </button>
                  <button id="more">
                     <UseAnimations
                        animation={alertCircle}
                        size={20}
                        strokeColor="#0ab7f7"
                     />
                     <span> Quero saber mais</span>
                  </button>
               </footer>
            </article> */}
         </main>
         <Footer />
      </div>
   )
}
