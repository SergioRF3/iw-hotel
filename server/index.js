var express = require('express')
var jwt = require('jwt-simple')
var moment = require('moment')
var multer = require('multer')
var cors = require('cors')

var app  = express()
app.use(express.json())
app.use(cors())

const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'adi',
      password : 'adi',
      database : 'iw-hotel'
    }
})

//var secret = '35181132177846321494132184547985';
var secret = '79457453290676546685234867529018';

app.listen(3000, function() {
    console.log("El servidor está en el puerto 3000")
})

//---------------------------------------------- Pagination ----------------------------------------------------

async function pagination(table, currentPage, limit, order, search){
    currentPage = parseInt(currentPage)
    limit = parseInt(limit)
    if(!currentPage || currentPage<0){
        currentPage = 1
    }
    if(!limit || limit<0){
        limit = 10
    }
    var offset = ((currentPage - 1) * limit)

    var total = await knex(table).count()
    .modify(function(queryBuilder) {
        if (search != undefined) {
           queryBuilder.whereRaw(`LOWER(${order}) LIKE ?`, [`%${search.toLowerCase()}%`])
        }
    })
    var list = await knex(table)
        .limit(limit)
        .offset(offset)
        .select()
        .orderBy(order)
        .modify(function(queryBuilder) {
            if (search != undefined) {
               queryBuilder.whereRaw(`LOWER(${order}) LIKE ?`, [`%${search.toLowerCase()}%`])
            }
         })

    listCount = await list.length
    total = await total[0].count

    var totalPages = Math.ceil(total / limit)
    var previousPage = 'http://localhost:3000/' + table + '?page=' + (currentPage - 1) + '&limit=' + limit
    var nextPage = 'http://localhost:3000/' + table + '?page=' + (currentPage + 1) + '&limit=' + limit

    return{
        paging: {
            total: total,
            page: currentPage,
            pages: totalPages,
            limit: limit,
            previous: previousPage,
            next: nextPage,
        },
        data: list,
    }
}

//---------------------------------------------- Autentification ----------------------------------------------------
app.post('/login', async function(req, res){
  var email = req.body.email
  var password = req.body.password
  var users = await knex('user').select().where('email',email)
  var user = users[0]
  if (user && user.password==password) {
      var payload = {
          email: email,
          exp: moment().add(7, 'days').valueOf()
      }
      var token = jwt.encode(payload, secret)
      res.send({
          email: user.email,
          name: user.name,
          type: user.type,
          Bearer: token,
      })
  }
  else {
      res.sendStatus(403).end()
  }
})

function getTokenFromAuthHeader(req) {
  var cabecera = req.header('Authorization')
  if (cabecera) {
      var campos = cabecera.split(' ')
      if (campos.length>1 && cabecera.startsWith('Bearer')) {
          return campos[1] 
      }
  }
  return undefined
}

//Middleware
function checkJWT(req, res, next) {

  var token = getTokenFromAuthHeader(req)
  try {
      var decoded = jwt.decode(token, secret);
  }
  catch(error) {
      console.log(error)
  }
  if (decoded!=undefined) {
      next()
  }
  else {
      res.status(403)
      res.send({mensaje: "No tienes permisos"})
  }
}

//---------------------------------------------- User ---------------------------------------------------------
//View user given an id
app.get('/users/:id', async function(req,res) {
    var user = await knex('user').select().where('id',req.params.id)
    res.status(200).send(user)
})

//View list of all users
app.get('/users', async function(req,res) {
    var currentPage = req.query.page
    var limit = req.query.limit
    var search  =req.query.search
    res.status(200).send(await pagination('user', currentPage, limit, 'email', search))
})
app.post('/users/email', async function(req,res) {
    var email = req.body.email
    console.log('hola')
    var user = await knex('user').where('email','=',email)
    res.status(200).send(user)
})

//Create user
//Query returns the new autoincremented id
app.post('/users', checkJWT, async function(req, res) {
    var user = req.body
    var id = await knex('user')
        .insert({email: user.email,
                name: user.name,
                password: user.password,
                dni: user.dni,
                phone: user.phone,
                type: user.type,
                state: user.state})
        .returning('id')
    res.status(201).send('http://localhost:3000/users/' + id)
})

//Modify user given an existing one
app.put('/users', checkJWT, async function(req,res) {
    var user = req.body
    await knex('user')
        .where('id', '=', user.id)
        .update({email: user.email,
                name: user.name,
                password: user.password,
                dni: user.dni,
                phone: user.phone,
                type: user.type,
                state: user.state})
    res.status(201).send('http://localhost:3000/users/' + user.id)
})

//Deletes user given an id
app.delete('/users', checkJWT, async function(req,res) {
    var id = req.body.id
    await knex('user').del().where('id', id)
    res.status(200).send('user ' + id + ' deleted succesfully')
})

//---------------------------------------------- Hall ---------------------------------------------------------
//View hall given an id
app.get('/halls/:id', async function(req,res) {
    var hall = await knex('hall').select().where('id',req.params.id)
    res.status(200).send(hall)
})

//View list of all halls
app.get('/halls', async function(req,res) {
    var currentPage = req.query.page
    var limit = req.query.limit
    var search  =req.query.search
    res.status(200).send(await pagination('hall', currentPage, limit, 'number', search))
})

//Create hall
//Query returns the new autoincremented id
app.post('/halls', checkJWT, async function(req, res) {
    var hall = req.body
    var id = await knex('hall')
        .insert({number: hall.number,
                floor: hall.floor,
                capacity: hall.capacity,
                description: hall.description,
                image: hall.image,
                price: hall.price,
                state: hall.state})
        .returning('id')
    res.status(201).send('http://localhost:3000/halls/' + id)
})

//Modify hall given an existing one
app.put('/halls', checkJWT, async function(req,res) {
    var hall = req.body
    await knex('hall')
    .where('id', '=', hall.id)
        .update({number: hall.number,
                floor: hall.floor,
                capacity: hall.capacity,
                description: hall.description,
                image: hall.image,
                price: hall.price,
                state: hall.state})
        .where('id', hall.id)
    res.status(201).send('http://localhost:3000/halls/' + hall.id)
})

//Deletes hall given an id
app.delete('/halls', checkJWT, async function(req,res) {
    var id = req.body.id
    await knex('hall').del().where('id', id)
    res.status(200).send('hall ' + id + ' deleted succesfully')
})

//---------------------------------------------- Service ---------------------------------------------------------
//View service given an id
app.get('/services/:id', async function(req,res) {
    var service = await knex('service').select().where('id',req.params.id)
    res.status(200).send(service)
})

//View list of all services
app.get('/services', async function(req,res) {
    var currentPage = req.query.page
    var limit = req.query.limit
    var search  =req.query.search
    res.status(200).send(await pagination('service', currentPage, limit, 'name', search))
})

//Create service
//Query returns the new autoincremented id
app.post('/services', checkJWT, async function(req, res) {
    var service = req.body
    var id = await knex('service')
        .insert({name: service.name,
                description: service.description,
                type: service.type,
                price: service.price,
                state: service.state})
        .returning('id')
    res.status(201).send('http://localhost:3000/services/' + id)
})

//Modify service given an existing one
app.put('/services', checkJWT, async function(req,res) {
    var service = req.body
    await knex('service')
        .where('id', '=', service.id)
        .update({name: service.name,
                description: service.description,
                type: service.type,
                price: service.price,
                state: service.state})
        .where('id', service.id)
    res.status(201).send('http://localhost:3000/services/' + service.id)
})

//Deletes service given an id
app.delete('/services', checkJWT, async function(req,res) {
    var id = req.body.id
    await knex('service').del().where('id', id)
    res.status(200).send('service ' + id + ' deleted succesfully')
})

//---------------------------------------------- Room ---------------------------------------------------------
//View room given an id
app.get('/rooms/:id', async function(req,res) {
    var room = await knex('room').select().where('id',req.params.id)
    res.status(200).send(room)
})

//View list of all rooms
app.get('/rooms', async function(req,res) {
    var currentPage = req.query.page
    var limit = req.query.limit
    var search  =req.query.search
    res.status(200).send(await pagination('room', currentPage, limit, 'number', search))
})

//Create room
//Query returns the new autoincremented id
app.post('/rooms', checkJWT, async function(req, res) {
    var room = req.body
    var id = await knex('room')
        .insert({number: room.number,
                image: room.image,
                views: room.views,
                price: room.price,
                floor: room.floor,
                beds: room.beds,
                state: room.state})
        .returning('id')
    res.status(201).send('http://localhost:3000/rooms/' + id)
})

//Modify room given an existing one
app.put('/rooms', checkJWT, async function(req,res) {
    var room = req.body
    await knex('room')
        .where('id', '=', room.id)  
        .update({number: room.number,
                image: room.image,
                views: room.views,
                price: room.price,
                floor: room.floor,
                beds: room.beds,
                state: room.state})
        .where('id', room.id)
    res.status(201).send('http://localhost:3000/rooms/' + room.id)
})

//Deletes room given an id
app.delete('/rooms', checkJWT, async function(req,res) {
    var id = req.body.id
    await knex('room').del().where('id', id)
    res.status(200).send('room ' + id + ' deleted succesfully')
})

//---------------------------------------------- Season ---------------------------------------------------------
//View season given an id
app.get('/seasons/:id', async function(req,res) {
    var season = await knex('season').select().where('id',req.params.id)
    res.status(200).send(season)
})

//View list of all seasons
app.get('/seasons', async function(req,res) {
    var currentPage = req.query.page
    var limit = req.query.limit
    var search  =req.query.search
    res.status(200).send(await pagination('season', currentPage, limit, 'name', search))
})

//Create season
//Query returns the new autoincremented id
app.post('/season', checkJWT, async function(req, res) {
    var season = req.body
    var id = await knex('season')
        .insert({name: season.name,
                increment: season.increment,
                start: season.start,
                end: season.end})
        .returning('id')
    res.status(201).send('http://localhost:3000/seasons/' + id)
})

//Modify season given an existing one
app.put('/seasons', checkJWT, async function(req,res) {
    var season = req.body
    await knex('season')
        .where('id', '=', season.id)
        .update({name: season.name,
                increment: season.increment,
                start: season.start,
                end: season.end})
        .where('id', season.id)
    res.status(201).send('http://localhost:3000/seasons/' + season.id)
})

//Deletes season given an id
app.delete('/seasons', checkJWT, async function(req,res) {
    var id = req.body.id
    await knex('season').del().where('id', id)
    res.status(200).send('season ' + id + ' deleted succesfully')
})

//---------------------------------------------- Facility ---------------------------------------------------------
//View facility given an id
app.get('/facilities/:id', async function(req,res) {
    var facility = await knex('facility').select().where('id',req.params.id)
    res.status(200).send(facility)
})

//View list of all facilities
app.get('/facilities', async function(req,res) {
    var currentPage = req.query.page
    var limit = req.query.limit
    var search  =req.query.search
    res.status(200).send(await pagination('facility', currentPage, limit, 'name', search))
})

//Create facility
//Query returns the new autoincremented id
app.post('/facilities', checkJWT, async function(req, res) {
    var facility = req.body
    var id = await knex('facility')
        .insert({name: facility.name,
                description: facility.description,
                image: facility.image})
        .returning('id')
    res.status(201).send('http://localhost:3000/facilities/' + id)
})

//Modify facility given an existing one
app.put('/facilities', checkJWT, async function(req,res) {
    var facility = req.body
    await knex('facility')
        .where('id', '=', facility.id)
        .update({name: facility.name,
                description: facility.description,
                image: facility.image})
        .where('id', facility.id)
    res.status(201).send('http://localhost:3000/facilities/' + facility.id)
})

//Deletes facility given an id
app.delete('/facilities', checkJWT, async function(req,res) {
    var id = req.body.id
    await knex('facility').del().where('id', id)
    res.status(200).send('facility ' + id + ' deleted succesfully')
})

//---------------------------------------------- Reservation ---------------------------------------------------------
//View reservation given an id
app.get('/reservations/:id', async function(req,res) {
    var reservation = await knex('reservation')
                            .join('user','reservation.user_id','=','user.id')
                            .join('hall','reservation.hall_id','=','hall.id')
                            .join('room','reservation.room_id','=','room.id')
                            .select('reservation.id','user.name','hall.number','room.number','reservation.start','reservation.end')
                            .where('reservation.id',req.params.id)             
    res.status(200).send(reservation)
})

//View list of all reservations
app.get('/reservations', async function(req,res) {
    var currentPage = req.query.page
    var limit = req.query.limit
    var search  =req.query.search
    var reservation = await knex('reservation')
                            .join('user','reservation.user_id','=','user.id')
                            .join('hall','reservation.hall_id','=','hall.id')
                            .join('room','reservation.room_id','=','room.id')
                            .select('reservation.id','user.name','hall.number','room.number','reservation.start','reservation.end')
    res.status(200).send(reservation)
})

//Create reservation
//Query returns the new autoincremented id
app.post('/reservation', checkJWT, async function(req, res) {
    var reservation = req.body
    var id = await knex('reservation')
        .insert({start: reservation.start,
                end: reservation.end,
                state: reservation.state,
                total: reservation.total,
                room_id: reservation.room_id,
                hall_id: reservation.hall_id,
                user_id: reservation.user_id,})
        .returning('id')
    res.status(201).send('http://localhost:3000/reservations/' + id)
})

//Modify reservation given an existing one
app.put('/reservations', checkJWT, async function(req,res) {
    var reservation = req.body
    await knex('reservation')
        .where('id', '=', reservation.id)
        .update({start: reservation.start,
                end: reservation.end,
                state: reservation.state,
                total: reservation.total,
                room_id: reservation.room_id,
                hall_id: reservation.hall_id,
                user_id: reservation.user_id,})
        .where('id', reservation.id)
    res.status(201).send('http://localhost:3000/reservations/' + reservation.id)
})

//Deletes reservation given an id
app.delete('/reservations', checkJWT, async function(req,res) {
    var id = req.body.id
    await knex('reservation').del().where('id', id)
    res.status(200).send('reservation ' + id + ' deleted succesfully')
})

//---------------------------------------------- Reservation_Service ---------------------------------------------------------
//View reservation_service given an id
app.get('/reservation_services/:id', async function(req,res) {
    var reservation_service = await knex('reservation_service').select().where('id',req.params.id)
    res.status(200).send(reservation_service)
})

//View list of all reservation_services
app.get('/reservation_services', async function(req,res) {
    var currentPage = req.query.page
    var limit = req.query.limit
    var search  =req.query.search
    res.status(200).send(await pagination('reservation_service', currentPage, limit, 'id', search))
})

//Create reservation_service
//Query returns the new autoincremented id
app.post('/reservation_service', checkJWT, async function(req, res) {
    var reservation_service = req.body
    var id = await knex('reservation_service')
        .insert({reservation_id: reservation_service.reservation_id,
                service_id: reservation_service.service_id})
        .returning('id')
    res.status(201).send('http://localhost:3000/reservation_services/' + id)
})

//Modify reservation_service given an existing one
app.put('/reservation_services', checkJWT, async function(req,res) {
    var reservation_service = req.body
    await knex('reservation_service')
        .update({reservation_id: reservation_service.reservation_id,
                service_id: reservation_service.service_id})
        .where('id', reservation_service.id)
    res.status(201).send('http://localhost:3000/reservation_services/' + reservation_service.id)
})

//Deletes reservation_service given an id
app.delete('/reservation_services', checkJWT, async function(req,res) {
    var id = req.body.id
    await knex('reservation_service').del().where('id', id)
    res.status(200).send('reservation_service ' + id + ' deleted succesfully')
})

