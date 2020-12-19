exports.up = function (knex) {
   return knex.schema.createTable('attractions', function (table) {
      table.increments()
      table.string('event_id').notNullable()
      table.string('image').notNullable()
      table.string('name').notNullable()
      table.string('description', 200).notNullable()

      table
         .foreign('event_id')
         .references('id')
         .inTable('events')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
   })
}

exports.down = function (knex) {
   return knex.schema.dropTableIfExists('attractions')
}
