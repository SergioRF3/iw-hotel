var express = require('express')

var app  = express()
app.use(express.json())

app.listen(3000, function() {
    console.log("El servidor está en el puerto 3000")
})
