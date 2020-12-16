exports.up = function (knex) {
   return knex.schema.createTable('houses_images', function (table) {
      table.increments()
      table.string('house_id').notNullable()

      table.foreign('house_id').references('id').inTable('houses')
   })
}

exports.down = function (knex) {
   return knex.schema.dropTable('houses_images')
}
