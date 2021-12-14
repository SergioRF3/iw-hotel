var faker = require('faker')

var total = 50

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('room').del()
  .then(function () {
    // Inserts seed entries
    var rooms = []
    var room
    for(var i=0;i<total;i++){
      room = {
        number: faker.number(),
        price: faker.commerce.price(),
        floor: faker.number(),
        beds: faker.number(),
        views: faker.random.word(),
        image: faker.random.image(),
        state: faker.boolean(),
      }
      rooms.push(room)
    }
    return knex('room').insert(rooms);
  });
};
