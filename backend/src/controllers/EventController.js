const connection = require('../database/connection')

module.exports = {
   async index(request, response) {
      const events = await connection('events').select('*')

      return response.json(events)
   },

   async create(request, response) {}
}
