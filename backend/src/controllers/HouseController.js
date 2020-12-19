const connection = require('../database/connection')
const crypto = require('crypto')
const bcrypt = require('bcrypt')

module.exports = {
   async all(request, response) {
      const houses = await connection('houses').select('*')

      console.log('a')
      return response.json(houses)
   },

   async index(request, response) {
      const house = await connection('houses')
         .where('houses.id', request.params.id)
         .select('*')

      return response.json(house)
   },

   async create(request, response) {
      const {
         name,
         description,
         openHour,
         openDay,
         price,
         latitude,
         longitude
      } = request.body

      const id = crypto.randomBytes(8).toString('HEX')

      const house = await connection('houses').insert({
         id,
         name,
         description,
         open_hour: openHour,
         open_day: openDay,
         price,
         latitude,
         longitude
      })

      const images = request.files

      const image = images.map(image => {
         return { house_id: id, image: image.filename }
      })

      await connection('houses')
         .update('thumb_img', image[0].image)
         .where('id', id)

      const houseImages = await connection('houses_images').insert(image)

      return response.status(200).json({
         id: id,
         message: 'House created successfully!'
      })
   }
}
