import React, { useEffect, useState } from 'react'
import UseAnimations from 'react-useanimations'
import { useHistory } from 'react-router-dom'

import { computeDistanceBetween } from 'spherical-geometry-js'

import bookmark from 'react-useanimations/lib/bookmark'
import star from 'react-useanimations/lib/star'
import alertCircle from 'react-useanimations/lib/alertCircle'

import Event from '../../images/so-track-boa.jpg'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import api from '../../services/api'

import './styles.css'

export default function Home() {
   const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
   const [distance, setDistance] = useState()
   const history = useHistory()

   useEffect(() => {
      const { lat, lng } = JSON.parse(localStorage.getItem('position'))

      if (lat === null) {
         history.push('/landing')
      }

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
   }, [position])

   return (
      <div id="home-container">
         <Navbar />
         <main>
            <article className="news">
               <header>
                  <img src={Event} alt="evento" />
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
            </article>
         </main>
         <Footer />
      </div>
   )
}
