import React, { useState } from 'react'
import UseAnimations from 'react-useanimations'

import searchToX from 'react-useanimations/lib/searchToX'

import './styles.css'

export default function Navbar() {
   const [expandedSearch, setExpandedSearch] = useState(false)

   return (
      <nav>
         <span>AlegreShow</span>
         <ul>
            <li>Casas de show</li>
            <li>Eventos</li>
            <li className="search">
               <input
                  type="text"
                  className={expandedSearch ? 'expanded' : ''}
                  placeholder="Procure por eventos"
               />
               <UseAnimations
                  animation={searchToX}
                  size={20}
                  strokeColor="#09793e"
                  onClick={e => {
                     setExpandedSearch(!expandedSearch)
                  }}
               />
            </li>
         </ul>
      </nav>
   )
}
