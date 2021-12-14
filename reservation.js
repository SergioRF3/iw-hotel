/** 
var faker = require('faker')

var total = 50

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reservation').del()
    .then(function () {
      // Inserts seed entries
      var reservations = []
      var reservation
      for(var i=0;i<total;i++){
        reservation = {
          start: faker.datatype.datetime(),
          end: faker.datatype.datetime(),
          state: faker.datatype.boolean(),
          room_id: faker.datatype.number({'min': 1, 'max':total}),
          hall_id: faker.datatype.number({'min': 1, 'max':total}),
          user_id: faker.datatype.number({'min': 1, 'max':total})
        }
        reservations.push(reservation)
      }
      return knex('reservation').insert(reservations);
    });
};
*/