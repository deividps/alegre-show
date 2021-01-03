import React from 'react'

import UseAnimations from 'react-useanimations'

import loading from 'react-useanimations/lib/loading'

import './styles.css'

export default function Loading() {
   return (
      <div id="loading-container">
         Loading, please wait
         <br />
         <UseAnimations
            animation={loading}
            size={50}
            strokeColor="#09793e"
            loop={true}
            speed={1}
         />
      </div>
   )
}
