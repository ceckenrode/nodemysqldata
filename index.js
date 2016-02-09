var express = require('express');
var mysql = require('mysql');
var app = express();
var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'coolkids'
});

app.get('/cast', function(req, res) {

  connection.query("SELECT * FROM coolkidtable;", function(err, result) {
    res.send(result);
  });

});

app.get('/coolness-chart', function(req, res) {

  connection.query("SELECT * FROM coolkidtable ORDER BY coolness_points DESC;", function(err, result) {
    res.send(result);
  });

});

app.get('/attitude-chart/:type', function(req, res) {
  var type = req.params.type;
  var query = "SELECT * FROM coolkidtable WHERE attitude = '" + type + "';";

  connection.query(query, function(err, result) {
    res.send(result);
  });

});


app.listen(PORT, function() {
  console.log("Listening at %s", PORT);
});