const express = require('express')

const EventController = require('./controllers/EventController')

const routes = express.Router()

routes.post('/event', EventController.create)
routes.get('/events', EventController.index)

module.exports = routes
