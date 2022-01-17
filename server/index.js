var express = require('express')
var jwt = require('jwt-simple')

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


