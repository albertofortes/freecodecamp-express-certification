let express = require('express');
let app = express();

console.log('Hello World');

app.get("/", (req, res) => {
  //res.send("Hello Express");
  let path = absolutePath = __dirname + '/views/index.html';
  res.sendFile(path)
});





























 module.exports = app;
