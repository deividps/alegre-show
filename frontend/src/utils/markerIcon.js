import { icon } from 'leaflet'

import beerSvg from '../images/beer.svg'

const markerIcon = icon({
   iconUrl: beerSvg,

   iconSize: [58, 58],
   iconAnchor: [29, 58],
   popupAnchor: [0, -68]
})

export default markerIcon
