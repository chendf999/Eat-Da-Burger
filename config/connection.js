
// require('dotenv').config();

const mysql = require("mysql");
// const password = process.env.PASSWORD;

const connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "1234QWERasdf!@#$",
	database: "burgers_db"
});

connection.connect(function(err, data){
	if(err) throw err;
	console.log('connected');
});

module.exports = connection;
