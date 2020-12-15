const connection = require('../database/connection')

module.exports = {
   async index(request, response) {
      const houses = await connection('houses').select('*')

      return response.json(houses)
   },

   async create(request, response) {
      const {
         name,
         description,
         openHour,
         openDay,
         price,
         longitude,
         latitude
      } = request.body

      // console.log(request.file)

      const images = request.files

      // return response.json()

      const image = images.map(image => {
         return { path: image.filename }
      })

      console.log(
         name,
         description,
         openHour,
         openDay,
         price,
         latitude,
         longitude,
         images
      )

      return response.status(200)
   }
}
