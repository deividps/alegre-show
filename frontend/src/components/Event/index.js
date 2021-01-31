import { React } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCheckCircle } from '@fortawesome/free-regular-svg-icons'

import './styles.css'

export default function Event(props) {
   return (
      <div className="event" key={props.id}>
         <img
            src={`http://localhost:3333/uploads/${props.thumb}`}
            alt={props.title}
         />
         <div className="event-info">
            <h2>{props.title}</h2>
            <p>{props.date}</p>
         </div>
         <p>{props.description}</p>
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
   )
}
