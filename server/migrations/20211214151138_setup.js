
exports.up = function(knex) {
  return knex.schema
  .createTable('user', function(table) {
    table.increments().primary()
    table.string('name', 255).notNullable()
    table.string('password', 255).notNullable()
    table.string('email', 255).notNullable()
    table.string('dni', 255).notNullable()
    table.string('phone', 255).notNullable()
    table.integer('type').notNullable()
  })
  .createTable('hall', function(table) {
    table.increments().primary()
    table.integer('number').notNullable()
    table.integer('floor').notNullable()
    table.integer('capacity').notNullable()
    table.string('description', 255).notNullable()
    table.string('image', 255).notNullable()
    table.double('price').notNullable()
  })
  .createTable('services', function(table){
    table.increments().primary()
    table.string('name', 255).notNullable()
    table.string('description', 255).notNullable()
    table.string('type', 255).notNullable()
    table.double('price').notNullable()
  })
  .createTable('room', function(table){
    table.increments().primary()
    table.integer('number').notNullable()
    table.string('image', 255).notNullable()
    table.string('views', 255).notNullable()
    table.double('price').notNullable()
    table.integer('floor').notNullable()
    table.integer('beds').notNullable()
  })
  .createTable('season', function(table){
    table.increments().primary()
    table.string('name', 255).notNullable()
    table.integer('increments').notNullable()
    table.date('start').notNullable()
    table.date('end').notNullable()
  })
  .createTable('facilities', function(table){
    table.increments().primary()
    table.string('name', 255).notNullable()
    table.string('description', 255).notNullable()
    table.string('image', 255).notNullable()
  })
  .createTable('reservation', function(table){
    table.increments().primary()
    table.date('date').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('user')
    .dropTable('hall')
    .dropTable('services')
    .dropTable('room')
    .dropTable('season')
    .dropTable('facilities')
    .dropTable('reservation')
};
