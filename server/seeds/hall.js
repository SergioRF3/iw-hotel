var faker = require('faker')

var total = 50

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hall').del()
    .then(function () {
      // Inserts seed entries
      var halls = []
      var hall
      for(var i=0;i<total;i++){
        hall = {
          number: faker.random.number(),
          floor: faker.random.number(),
          capacity: faker.random.number(),
          description: faker.lorem.sentence(),
          image: faker.random.image(),
          price: faker.commerce.price(),
          state: faker.datatype.boolean()
        }
        halls.push(hall)
      }
      return knex('hall').insert(halls);
    });
};
