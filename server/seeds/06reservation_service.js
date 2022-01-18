var faker = require('faker')

var total = 50

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reservation_service').del()
  .then(function () {
    // Inserts seed entries
    var reservation_services = []
    var reservation_service
    for(var i=0;i<total;i++){
      reservation_service = {
        reservation_id: total-i,
        service_id: i+1
      }
      reservation_services.push(reservation_service)
    }
    return knex('reservation_service').insert(reservation_services);
  });
};