exports.up = function (knex) {
   return knex.schema.createTable('house', function (table) {
      table.string('id').primary()
      table.string('name').notNullable()
      table.string('description', 300)
      table.string('open_hour').notNullable()
      table.string('open_day').notNullable()
      table.enu('price', ['$', '$$', '$$$']).notNullable()
      table.string('latitude').notNullable()
      table.string('longitude').notNullable()
      table.boolean('is_approved').defaultTo(false)
   })
}

exports.down = function (knex) {}
