exports.up = function (knex) {
   return knex.schema.createTable('houses_images', function (table) {
      table.increments('id')
      table.string('house_id').notNullable()
      table.string('image').notNullable()

      table
         .foreign('house_id')
         .references('id')
         .inTable('houses')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
   })
}

exports.down = function (knex) {
   return knex.schema.dropTableIfExists('houses_images')
}
