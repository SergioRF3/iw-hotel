var express = require('express')
var jwt = require('jwt-simple')
var moment = require('moment')
var multer = require('multer')
var cors = require('cors')

var app  = express()
app.use(express.json())
app.use(cors())

var app  = express()
app.use(express.json())

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
  var users = await knex('users').select().where('email',email)
  var user = users[0]
  if (user && user.password==password) {
      var payload = {
          email: email,
          exp: moment().add(7, 'days').valueOf()
      }
      var token = jwt.encode(payload, secret)
      res.send({
          user: user.email,
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

//Create user
//Query returns the new autoincremented id
app.post('/users', checkJWT, async function(req, res) {
    var user = req.body
    var id = await knex('user')
        .insert({email: user.email,
                name: user.name,
                password: user.password})
        .returning('id')
    res.status(201).send('http://localhost:3000/users/' + id)
})

//Modify user given an existing one
app.put('/users', checkJWT, async function(req,res) {
    var user = req.body
    await knex('user')
        .update({email: user.email,
                name: user.name,
                password: user.password})
        .where('id', user.id)
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
app.post('/hall', checkJWT, async function(req, res) {
    var hall = req.body
    var id = await knex('hall')
        .insert({number: hall.number,
                floor: hall.floor,
                description: hall.description,
                price: hall.price})
        .returning('id')
    res.status(201).send('http://localhost:3000/halls/' + id)
})

//Modify hall given an existing one
app.put('/halls', checkJWT, async function(req,res) {
    var hall = req.body
    await knex('hall')
        .update({number: hall.number,
            floor: hall.floor,
            description: hall.description,
            price: hall.price})
        .where('id', hall.id)
    res.status(201).send('http://localhost:3000/halls/' + hall.id)
})

//Deletes hall given an id
app.delete('/halls', checkJWT, async function(req,res) {
    var id = req.body.id
    await knex('hall').del().where('id', id)
    res.status(200).send('hall ' + id + ' deleted succesfully')
})
