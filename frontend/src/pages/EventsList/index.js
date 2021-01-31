import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'

import api from '../../services/api'

import './styles.css'

export default function EventsList() {
   const [events, setEvents] = useState()

   useEffect(() => {
      api.get('events').then(response => {
         setEvents(response.data)
      })
   }, [])

   if (!events) {
      return <Loading />
   }

   return (
      <div id="events-container">
         <Navbar />
         <main>
            <div className="events-list">
               {events &&
                  events.map(event => {
                     return (
                        <Link to={`event/${event.id}`} key={event.id}>
                           <div className="event">
                              <img
                                 src={`http://localhost:3333/uploads/${event.thumb_img}`}
                                 alt={event.title}
                              />
                              <div>
                                 <h3>{event.title}</h3>
                                 <p>{event.description}</p>
                              </div>
                              <div>
                                 <sub>Dia do Evento</sub>
                                 <p>{event.start_date}</p>
                                 <sub>Open Bar</sub>
                                 <p>{event.is_open_bar ? 'Brota' : 'Nem'}</p>
                                 <sub>Valor</sub>
                                 <p>{event.price}</p>
                              </div>
                           </div>
                        </Link>
                     )
                  })}
            </div>
         </main>
         <Footer />
      </div>
   )
}
