const express = require('express')
const path = require('path')
const port = process.env.PORT || 80
const app = express()

// serve static assets normally
app.use(express.static(__dirname + '/assets'))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  //response.sendFile(path.resolve(__dirname, 'assets', 'index.html'))
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('path: ' + path.resolve(__dirname, 'assets', 'index.html'));
})

app.listen(port)
console.log("server started on port " + port)