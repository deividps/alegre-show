const express = require('express')
const multer = require('multer')

const uploadConfig = require('./config/upload')
const upload = multer(uploadConfig)

const EventController = require('./controllers/EventController')
const HouseController = require('./controllers/HouseController')
const ImagesController = require('./controllers/ImagesController')
const ReviewsController = require('./controllers/ReviewsController')
const AttractionsController = require('./controllers/AttractionsController')

const routes = express.Router()

routes.post('/event', upload.array('images'), EventController.create)
routes.get('/events', EventController.all)
routes.get('/event/:id', EventController.index)
routes.get('/event/byhouse/:houseId', EventController.byHouse)
routes.get('/events/groupbydate', EventController.groupByDate)

routes.post('/house', upload.array('images'), HouseController.create)
routes.get('/houses', HouseController.all)
routes.get('/house/:id', HouseController.index)

routes.get('/images/house/:id', ImagesController.house)
routes.get('/images/event/:eventId', ImagesController.event)

routes.post('/review', upload.single('image'), ReviewsController.create)
routes.get('/reviews/event/:id', ReviewsController.get)

routes.post('/attraction', upload.single('image'), AttractionsController.create)
routes.get('/attractions/event/:id', AttractionsController.get)

module.exports = routes
