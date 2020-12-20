const connection = require('../database/connection')
const { create } = require('./EventController')

module.exports = {
   async get(request, response) {
      const reviews = await connection('reviews')
         .where('event_id', request.params.id)
         .select('*')

      return response.json(reviews)
   },

   async create(request, response) {
      const { name, review, rate, interviewed_at, event_id } = request.body

      const { filename: image } = request.file

      const reviewDB = await connection('reviews').insert({
         image,
         name,
         review,
         rate,
         interviewed_at,
         event_id
      })

      return response.json(reviewDB)
   }
}
