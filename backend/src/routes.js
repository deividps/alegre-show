const express = require('express')
const multer = require('multer')

const uploadConfig = require('./config/upload')
const upload = multer(uploadConfig)

const EventController = require('./controllers/EventController')
const HouseController = require('./controllers/HouseController')

const routes = express.Router()

routes.post('/event', EventController.create)
routes.get('/events', EventController.index)

routes.post('/house', upload.array('images'), HouseController.create)

module.exports = routes
