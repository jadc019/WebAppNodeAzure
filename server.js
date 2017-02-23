const express = require('express')
const path = require('path')
const port = process.env.PORT || 80
const app = express()

// serve static assets normally
app.use(express.static(__dirname + '/MonitorUM'))
app.use(express.static(__dirname + '/SimuladorUM'))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('/MonitorUM', function (request, response){
  console.log(' redirect to : ' + path.resolve(__dirname, 'MonitorUM', 'index.html'))
  response.sendFile(path.resolve(__dirname, 'MonitorUM', 'index.html'))
})
/*
app.get('/MonitorUM/*', function (request, response){
  console.log(' redirect to : ' + path.resolve(__dirname, 'MonitorUM', 'index.html'))
  response.sendFile(path.resolve(__dirname, 'MonitorUM', 'index.html'))
})
*/

app.get('/SimuladorUM', function (request, response){
  console.log(' redirect to : ' + path.resolve(__dirname, 'SimuladorUM', 'index.html'))
  response.sendFile(path.resolve(__dirname, 'SimuladorUM', 'index.html'))
})
/*
app.get('/SimuladorUM/*', function (request, response){
  console.log(' redirect to : ' + path.resolve(__dirname, 'SimuladorUM', 'index.html'))
  response.sendFile(path.resolve(__dirname, 'SimuladorUM', 'index.html'))
})
*/
app.listen(port)
console.log("server started on port " + port)