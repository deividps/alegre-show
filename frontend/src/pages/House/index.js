import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import raveImg from '../../images/rave.jpg'
import eventImg from '../../images/so-track-boa.jpg'

import {
   faCalendarAlt,
   faClock,
   faMoneyBillAlt,
   faStar,
   faBookmark,
   faCheckCircle
} from '@fortawesome/free-regular-svg-icons'

import './styles.css'

export default function House() {
   return (
      <div id="house-container">
         <Navbar />
         <main>
            <div className="info">
               <img src={raveImg} alt="rave" />
               <div className="images"></div>
               <h2>Grimland</h2>
               <p>
                  Aqui voce vai usar tanta droga que vai dar um passeio de mãos
                  dadas com 6 gnomos amarelos.
               </p>
            </div>
            <div className="secondary-info">
               <div>
                  <FontAwesomeIcon icon={faClock} id="openHour" />O dia todo.
               </div>
               <div>
                  <FontAwesomeIcon icon={faCalendarAlt} id="open" />
                  Todos os dias.
               </div>
               <div>
                  <FontAwesomeIcon icon={faMoneyBillAlt} id="price" />$
               </div>
               <div>
                  <FontAwesomeIcon icon={faStar} id="rate" />
                  8,7
               </div>
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
