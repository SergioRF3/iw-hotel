var faker = require('faker')

var total = 50

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('facility').del()
    .then(function () {
      // Inserts seed entries
      var facilities = []
      var facility
      for(var i=0;i<total;i++){
        facility = {
          name: faker.lorem.word(),
          description: faker.commerce.productDescription(),
          image: faker.random.image(),
        }
        facilities.push(facility)
      }
      return knex('facility').insert(facilities);
    });
};
