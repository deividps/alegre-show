const {
   Entity,
   Column,
   PrimaryGeneratedColumn,
   ManyToOne,
   JoinColumn
} = require('typeorm')

const House = require('./House')

module.exports = {
   name: 'Image',
   tableName: 'house_images',
   columns: {
      id: {
         primary: true,
         type: 'integer',
         generated: true
      }
   }
}
