exports.up = function (knex) {
   return knex.schema.createTable('event_images', function (table) {
      table.increments('id')
      table.string('event_id').notNullable()
      table.string('image').notNullable()

      table
         .foreign('event_id')
         .references('id')
         .inTable('houses')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
   })
}

exports.down = function (knex) {
   return knex.schema.dropTableIfExists('event_images')
}
