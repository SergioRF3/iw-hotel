var faker = require('faker')

var total = 50

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('season').del()
  .then(function () {
    // Inserts seed entries
    var seasons = []
    var season
    for(var i=0;i<total;i++){
      season = {
        name: faker.random.word(),
        start: faker.datatype.datetime(),
        end: faker.datatype.datetime(),
        increment: faker.commerce.price(),
      }
      seasons.push(season)
    }
    return knex('season').insert(seasons);
  });
};