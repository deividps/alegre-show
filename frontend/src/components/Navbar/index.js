import React, { useState } from 'react'
import UseAnimations from 'react-useanimations'
import { Link } from 'react-router-dom'

import searchToX from 'react-useanimations/lib/searchToX'

import './styles.css'

export default function Navbar() {
   const [expandedSearch, setExpandedSearch] = useState(false)

   return (
      <nav>
         <span>
            <Link to="/">AlegreShow</Link>
         </span>
         <ul>
            <li>
               <Link to="/houses">Casas de show</Link>
            </li>
            <li>
               <Link to="/events">Eventos</Link>
            </li>
            {/* <li
               className="search"
               onClick={e => {
                  document.getElementById('search-icon').click()
               }}
            >
               <input
                  type="text"
                  className={expandedSearch ? 'expanded' : ''}
                  placeholder="Procure por eventos"
               />
               <UseAnimations
                  id="search-icon"
                  animation={searchToX}
                  size={20}
                  strokeColor="#fff"
               />
            </li> */}
         </ul>
      </nav>
   )
}
