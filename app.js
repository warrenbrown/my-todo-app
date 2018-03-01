//require express
const express = require('express');
//call express
const app = express();

//take us to the root of the app
app.get('/', function(req, res) {
  //respond with hello world
  res.send('Hello World!');
});

//Server listing to port 3001
app.listen(3001, function () {
  console.log('Server is running on localhost:3001!  Cntrl C to terminate')
});
