import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'

import houseImg from '../../images/house.jpg'
import raveImg from '../../images/rave.jpg'

import api from '../../services/api'

import './styles.css'

export default function HousesList() {
   const [houses, setHouses] = useState([])

   useEffect(() => {
      api.get('houses').then(response => {
         setHouses(response.data)
      })
   }, [])

   if (!houses) {
      return <Loading />
   }

   return (
      <div id="houses-container">
         <Navbar />
         <main>
            <div className="houses-list">
               {houses.map(house => {
                  return (
                     <Link to={`house/${house.id}`} key={house.id}>
                        <div className="house">
                           <img
                              src={`http://localhost:3333/uploads/${house.thumb_img}`}
                              alt={house.name}
                           />
                           <div>
                              <h3>{house.name}</h3>
                              <p>{house.description}</p>
                           </div>
                           <div>
                              <sub>Funcionamento</sub>
                              <p>{house.open_day}</p>
                              <sub>Aberto</sub>
                              <p>{house.open_hour}</p>
                              <sub>Valor</sub>
                              <p>{house.price}</p>
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
