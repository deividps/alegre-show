import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Landing from './pages/Landing'
import HousesList from './pages/HousesList'
import House from './pages/House'
import Event from './pages/Event'
import EventsList from './pages/EventsList'

export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/landing" component={Landing} />
            <Route path="/houses" component={HousesList} />
            <Route path="/house" component={House} />
            <Route path="/event" component={Event} />
            <Route path="/events" component={EventsList} />
         </Switch>
      </BrowserRouter>
   )
}
