exports.up = function (knex) {
   return knex.schema.createTable('reviews', function (table) {
      table.increments()
      table.string('image').notNullable()
      table.string('name').notNullable()
      table.string('review', 300).notNullable()
      table.float('rate', [2], [1]).notNullable()
      table.enu('interviewed_at', ['beginning', 'middle', 'end']).notNullable()
      table.string('event_id').notNullable()

      table
         .foreign('event_id')
         .references('id')
         .inTable('events')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
   })
}

exports.down = function (knex) {}
