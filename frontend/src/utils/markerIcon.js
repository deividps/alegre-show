import { icon } from 'leaflet'

import beerSvg from '../images/marker.png'

const markerIcon = icon({
   iconUrl: beerSvg,

   iconSize: [55, 65],
   iconAnchor: [29, 65],
   popupAnchor: [0, -68]
})

export default markerIcon
