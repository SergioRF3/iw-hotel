
exports.up = function(knex) {
  return knex.schema
  .createTable('user', function(table) {
    table.increments().primary()
    table.string('name', 255).notNullable()
    table.string('password', 255).notNullable()
    table.string('email', 255).notNullable().unique()
    table.string('dni', 255).notNullable()
    table.string('phone', 255).notNullable()
    table.integer('type').notNullable()
    table.boolean('state').notNullable()
  })
  .createTable('hall', function(table) {
    table.increments().primary()
    table.integer('number').notNullable()
    table.integer('floor').notNullable()
    table.integer('capacity').notNullable()
    table.string('description', 255).notNullable()
    table.string('image', 255).notNullable()
    table.double('price').notNullable()
    table.boolean('state').notNullable()
  })
  .createTable('service', function(table){
    table.increments().primary()
    table.string('name', 255).notNullable()
    table.string('description', 255).notNullable()
    table.string('type', 255).notNullable()
    table.double('price').notNullable()
    table.boolean('state').notNullable()
  })
  .createTable('room', function(table){
    table.increments().primary()
    table.integer('number').notNullable()
    table.string('image', 255).notNullable()
    table.string('views', 255).notNullable()
    table.double('price').notNullable()
    table.integer('floor').notNullable()
    table.integer('beds').notNullable()
    table.boolean('state').notNullable()
  })
  .createTable('season', function(table){
    table.increments().primary()
    table.string('name', 255).notNullable()
    table.double('increment').notNullable()
    table.date('start').notNullable()
    table.date('end').notNullable()
  })
  .createTable('facility', function(table){
    table.increments().primary()
    table.string('name', 255).notNullable()
    table.string('description', 255).notNullable()
    table.string('image', 255).notNullable()
  })
  .createTable('reservation', function(table){
    table.increments().primary()
    table.date('start').notNullable()
    table.date('end').notNullable()
    table.boolean('state').notNullable()
    //Foreign Key
    table
       .integer('room_id')
       .references('id')
       .inTable('room')
    table
       .integer('hall_id')
       .references('id')
       .inTable('hall')
    table
       .integer('user_id')
       .references('id')
       .inTable('user')
  })
  .createTable('reservation_service', function(table){
    //Foreign Key
    table
        .integer('reservation_id')
        .references('id')
        .inTable('reservation')
    table
        .integer('service_id')
        .references('id')
        .inTable('service')
    table.primary(['reservation_id','service_id'])
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('user')
    .dropTable('hall')
    .dropTable('service')
    .dropTable('room')
    .dropTable('season')
    .dropTable('facility')
    .dropTable('reservation')
};
