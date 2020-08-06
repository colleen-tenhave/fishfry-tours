var mysql = require('mysql');
var express = require('express');
var router = express.Router();

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "boatDataDb"
});    

router.put('/', function(req, res) {
    console.log(req.body);
    var postData  = req.body;
    connection.query('UPDATE boats SET laneData = ? LIMIT 1', JSON.stringify(postData), function (error, results, fields) {
        if (error) throw error;
        console.log('posting');
        res.end(JSON.stringify(results));
      });
});

router.post('/', function(req, res) {
  console.log(req.body);
  var postData  = req.body;
  connection.query('UPDATE boats SET laneData = ? LIMIT 1', JSON.stringify(postData), function (error, results, fields) {
      if (error) throw error;
      console.log('posting');
      res.end(JSON.stringify(results));
    });
});

router.get('/', function (req, res) {
   connection.query('SELECT * from boats', function (error, results, fields) {
    if (error) throw error;
	  res.end(JSON.stringify(results[0].laneData));
	});
});

module.exports = router;