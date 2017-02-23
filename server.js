const express = require('express')
const path = require('path')
const port = process.env.PORT || 80
const app = express()

// serve static assets normally
app.use(express.static(__dirname + '/assets1'))
app.use(express.static(__dirname + '/assets2'))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('/asset1/*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'assets1', 'index.html'))
})
app.get('/asset2/*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'assets2', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)