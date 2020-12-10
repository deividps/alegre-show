import connection from '../database/connection'

export default {
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

      const requestImages = request.files

      const images = requestImages.map(image => {
         return { path: image.filename }
      })
   }
}
