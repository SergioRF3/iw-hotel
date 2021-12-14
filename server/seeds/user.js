var faker = require('faker')

var total = 50

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      var users = []
      var user
      for(var i=0;i<total;i++){
        user = {
          name: faker.name.firstName(),
          password: faker.internet.password(),
          email: faker.internet.email(),
          dni: faker.datatype.number(),
          phone: faker.phone.phoneNumber(),
          type: faker.datatype.number({'min': 0, 'max':2}),
          state: faker.datatype.boolean(),
        }
        users.push(user)
      }
      return knex('user').insert(users);
    });
};
