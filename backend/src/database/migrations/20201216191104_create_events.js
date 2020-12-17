exports.up = function (knex) {
   return knex.schema.createTable('events', function (table) {
      table.string('id')
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.integer('start_hour').notNullable()
      table.date('start_date').notNullable()
      table.boolean('is_open_bar').defaultTo(false)
      table.string('ps')
      table.string('latitude').notNullable()
      table.string('longitude').notNullable()
   })
}

exports.down = function (knex) {
   return knex.schema.dropTable('events')
}
