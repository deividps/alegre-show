const connection = require('../database/connection')

module.exports = {
   async all(request, response) {
      const events = await connection('events').select('*')

      return response.json(events)
   },

   async byHouse(request, response) {
      const events = await connection('events')
         .where('house_id', request.params.houseId)
         .select('*')

      return response.json(events)
   },

   async index(request, response) {
      const event = await connection('events')
         .where('id', request.params.id)
         .select('*')

      return response.json(event)
   },

   async create(request, response) {
      const {
         title,
         description,
         startHour,
         startDate,
         isOpenBar,
         ps,
         latitude,
         longitude,
         houseId
      } = request.body

      const event = await connection('events').insert({
         title,
         description,
         start_hour: startHour,
         start_date: startDate,
         is_open_bar: isOpenBar,
         ps,
         latitude,
         longitude,
         house_id: houseId
      })

      const images = request.files

      const image = images.map(image => {
         return { event_id: event[0], image: image.filename }
      })

      await connection('events')
         .update('thumb_img', image[0].image)
         .where('id', event[0])

      const eventImages = await connection('event_images').insert(image)

      return response.status(200).json({
         id: event[0],
         message: 'Event created successfully!'
      })
   }
}
