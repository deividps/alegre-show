import React from 'react'
import UseAnimations from 'react-useanimations'

import bookmark from 'react-useanimations/lib/bookmark'
import star from 'react-useanimations/lib/star'
import alertCircle from 'react-useanimations/lib/alertCircle'

import Event from '../../images/so-track-boa.jpg'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import './styles.css'

export default function Home() {
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
