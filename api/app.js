var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var boatDataRouter = require('./routes/boats');
const { connect } = require('http2');

var app = express();

const defaultData =  {
  laneData: {
    lanes: [
      {
        id: 'lane-docked',
        title: 'Docked',
        cards: []
      },
      {
        id: 'lane-outbound',
        title: 'Outbound to Sea',
        cards: []
      },
      {
        id: 'lane-inbound',
        title: 'Inbound to Harbour',
        cards: []
      },
      {
        id: 'lane-maintenance',
        title: 'Maintenance',
        cards: []
      },
    ]
  }
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/boats', boatDataRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME || "localhost",
  user: process.env.RDS_USERNAME || "root",
  password: process.env.RDS_PASSWORD || "",
  port: process.env.RDS_PORT
});

connection.connect(function(err) {
  if (err) throw err;

  // If running locally, create a new database and use it
  if(!process.env.RDS_DB_NAME) {
    connection.query("CREATE DATABASE IF NOT EXISTS boatDataDb", function (err, result) {
    if (err) throw err;
  });
    connection.query("USE boatDataDb");
  }else{
    connection.query(`USE ${process.env.RDS_DB_NAME}`);
  }

  var query = "CREATE TABLE IF NOT EXISTS boats (laneData TEXT)"
  connection.query(query, function (err, result) {
    if (err) throw err;
  });

  //if table is empty, insert default data with empty lanes
  connection.query("INSERT INTO boats (laneData) SELECT ? WHERE NOT EXISTS (SELECT * FROM boats)", JSON.stringify(defaultData.laneData), function (error, results, fields) {
    if (error) throw error;
  });
});

module.exports = app
