const {
   Entity,
   Column,
   PrimaryGeneratedColumn,
   OneToMany,
   JoinColumn
} = require('typeorm')

const HouseImage = require('./HouseImage')

module.exports = {
   name: 'House', // Will use table name `post` as default behaviour.
   tableName: 'houses', // Optional: Provide `tableName` property to override the default behaviour for table name.
   columns: {
      id: {
         primary: true,
         type: 'string',
         generated: false
      },
      thumb_img: {
         type: 'string'
      },
      name: {
         type: 'string',
         nullable: false
      },
      description: {
         type: 'string'
      },
      open_hour: {
         type: 'string',
         nullable: false
      },
      open_day: {
         type: 'string',
         nullable: false
      },
      price: {
         type: 'enum',
         options: ['$', '$$', '$$$']
      }
   },
   relations: {
      categories: {
         target: 'HouseImage',
         type: 'one-to-many',
         joinTable: true,
         cascade: true
      }
   }
}
