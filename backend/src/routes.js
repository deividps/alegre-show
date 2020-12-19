const express = require('express')
const multer = require('multer')

const uploadConfig = require('./config/upload')
const upload = multer(uploadConfig)

const EventController = require('./controllers/EventController')
const HouseController = require('./controllers/HouseController')
const ImagesController = require('./controllers/ImagesController')

const routes = express.Router()

routes.post('/event', upload.array('images'), EventController.create)
routes.get('/events', EventController.all)
routes.get('/event/:id', EventController.index)
routes.get('/event/byhouse/:houseId', EventController.byHouse)

routes.post('/house', upload.array('images'), HouseController.create)
routes.get('/houses', HouseController.all)
routes.get('/house/:id', HouseController.index)

routes.get('/images/house/:houseId', ImagesController.house)
routes.get('/images/event/:eventId', ImagesController.event)

module.exports = routes
