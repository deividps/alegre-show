import React, { useEffect } from 'react'
//import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UseAnimations from 'react-useanimations'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

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

export default function Event() {
   return (
      <div id="event-container">
         <Navbar />
         <main>
            <div className="info">
               <img src={eventImg} alt="evento" />
               <h2>Só Track Boa</h2>
               <p>
                  Um dos melhores DJs brasileiros tocando num rolê enquanto tu
                  chapa ácido até o cu encher.
               </p>
            </div>
            <div className="secondary-info">
               <div>
                  <FontAwesomeIcon icon={faClock} id="time" />
                  23h
               </div>
               <div>
                  <FontAwesomeIcon icon={faCalendarAlt} id="date" />
                  30 dez 2020
               </div>
               <div>
                  <FontAwesomeIcon icon={faTicketAlt} id="ticket" />
                  R$ 80
               </div>
               <div>
                  <FontAwesomeIcon icon={faGlassCheers} id="open" />
                  Open Bar
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
               <p>Não pode fazer merda lá, bro</p>
            </div>
            <h2>Principais Atrações</h2>
            <div className="attractions-list">
               <div className="attraction">
                  <img src={vintageImg} alt="vintage culture" />
                  <div className="attraction-info">
                     <h3>Vintage Culture</h3>
                     <p>
                        DJ Renomado no cenário atual, o cara eh pika p krl mlk
                     </p>
                  </div>
               </div>
               <div className="attraction">
                  <img src={kvshImg} alt="KVSH" />
                  <div className="attraction-info">
                     <h3>KVSH</h3>
                     <p>
                        Bichin eh feio mas toca bem pra krl. Embraza ao som
                        desse mlk ae
                     </p>
                  </div>
               </div>
            </div>
            <h2>Localização</h2>
            <div className="location">
               <Map
                  center={[-20.763148, -41.5317971]}
                  zoom={15}
                  style={{ width: '100%', height: '100%' }}
               >
                  <TileLayer
                     url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_TOKEN}`}
                     opacity={1}
                     zIndex={10}
                  />
                  <Marker
                     key="1"
                     icon={markerIcon}
                     position={[-20.763148, -41.5317971]}
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
               <div className="review">
                  <img src={womanImg} alt="pessoa" />
                  <div className="review-info">
                     <h3>Maria Antonieta Paz</h3>
                     <span>
                        <FontAwesomeIcon icon={faStar} />
                        9,7/10
                     </span>
                     <p>
                        "Tô gostando bastante do evento. Ele faz eu me sentir
                        renovada!!"
                     </p>
                     <sub> - Entrevistada no começo do evento.</sub>
                  </div>
               </div>
               <div className="review">
                  <img src={woman2Img} alt="pessoa" />
                  <div className="review-info">
                     <h3>Geovana Menegucci</h3>
                     <span>
                        <FontAwesomeIcon icon={faStar} />
                        8,4/10
                     </span>
                     <p>
                        "Teve algumas coisas que eu não curti, por exemplo
                        quando o gnomo segurou minha mão e me levou pra fora do
                        evento, vê se pode. Fora isso muito top!"
                     </p>
                     <sub> - Entrevistada no final do evento.</sub>
                  </div>
               </div>
            </div>
         </main>
         <Footer />
      </div>
   )
}
