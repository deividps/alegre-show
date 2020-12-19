const { select } = require('../database/connection')
const connection = require('../database/connection')

module.exports = {
   async house(request, response) {
      const images = await connection('houses_images')
         .where('house_id', request.params.houseId)
         .select('image')

      return response.json(images)
   },

   async event(request, response) {
      const images = await connection('event_images')
         .where('event_id', request.params.eventId)
         .select('image')

      return response.json(images)
   }
}
