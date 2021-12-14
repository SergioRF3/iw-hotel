var faker = require('faker')

var total = 50

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('service').del()
  .then(function () {
    // Inserts seed entries
    var services = []
    var service
    for(var i=0;i<total;i++){
      service = {
        name: faker.random.word(),
        description: faker.commerce.productDescription(),
        type: faker.helpers.randomize(['H', 'S']),
        price: faker.commerce.price(),
        state: faker.boolean(),
      }
      services.push(service)
    }
    return knex('service').insert(services);
  });
};