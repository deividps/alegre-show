const connection = require('../database/connection')

module.exports = {
   async get(request, response) {
      const attractions = await connection('attractions')
         .where('event_id', request.params.id)
         .select('*')

      return response.json(attractions)
   },

   async create(request, response) {
      const { event_id, name, description } = request.body

      const { filename: image } = request.file

      const attraction = await connection('attractions').insert({
         event_id,
         image,
         name,
         description
      })

      return response.json(attraction)
   }
}
