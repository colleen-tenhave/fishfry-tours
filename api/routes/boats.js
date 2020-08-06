var mysql = require('mysql');
var express = require('express');
var router = express.Router();

var connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME || "localhost",
  user: process.env.RDS_USERNAME || "root",
  password: process.env.RDS_PASSWORD || "",
  port: process.env.RDS_PORT,
  database: process.env.RDS_DB_NAME || "boatDataDb"
});    

//update the board data entry
router.put('/', function(req, res) {
  var postData  = req.body;
  connection.query('UPDATE boats SET laneData = ? LIMIT 1', JSON.stringify(postData), function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
});

//return the current board data
router.get('/', function (req, res) {
   connection.query('SELECT * from boats', function (error, results, fields) {
    if (error) throw error;
	  res.end(JSON.stringify(results[0].laneData));
	});
});

module.exports = router;