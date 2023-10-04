var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World from GKE cluster on GCP')
})

app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
