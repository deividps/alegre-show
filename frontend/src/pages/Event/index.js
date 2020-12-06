import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import eventImg from '../../images/so-track-boa.jpg'
import vintageImg from '../../images/vintage.jpg'

import {
   faCalendarAlt,
   faClock,
   faMoneyBillAlt
} from '@fortawesome/free-regular-svg-icons'

import { faTicketAlt, faGlassCheers } from '@fortawesome/free-solid-svg-icons'

import '../../utils/CardEffect'

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
            </div>
         </main>
         <Footer />
      </div>
   )
}
