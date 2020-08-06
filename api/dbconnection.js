var mysql=require('mysql');

var connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME || "localhost",
    user: process.env.RDS_USERNAME || "root",
    password: process.env.RDS_PASSWORD || "",
    port: process.env.RDS_PORT
});

connection.connect(function(err) {
    if (err) throw err;
});


module.exports = connection;