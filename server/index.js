var express = require('express')

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

app.listen(3000, function() {
    console.log("El servidor está en el puerto 3000")
})
