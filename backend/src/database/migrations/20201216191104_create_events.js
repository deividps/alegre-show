exports.up = function (knex) {
   return knex.schema.createTable('events', function (table) {
      table.increments('id')
      table.string('thumb_img')
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.string('start_hour').notNullable()
      table.date('start_date').notNullable()
      table.decimal('price')
      table.boolean('is_open_bar').defaultTo(false)
      table.string('ps')
      table.float('latitude').notNullable()
      table.float('longitude').notNullable()
      table.string('house_id').notNullable()

      table
         .foreign('house_id')
         .references('id')
         .inTable('houses')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
   })
}

exports.down = function (knex) {
   return knex.schema.dropTableIfExists('events')
}
