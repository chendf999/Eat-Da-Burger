
const connection = require("./connection.js");

// var tableCol = 'burgers(burger_name, devoured)'

var orm = {
	selectAll: function(table, cb){
		var queryString = 'SELECT * FROM ' + table + ';';
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function(table, cols, vals){
		var queryString = 'INSERT INTO ' + table + '(' + cols + ') VALUES(' + vals + ');';
		connection.query(queryString);
	},
	updateOne: function(table, colVal, location){
		var queryString = 'UPDATE ' + table + ' SET ' + colVal + ' WHERE ' + location + ';';
		connection.query(queryString);
	},
	deleteOne: function(table, location){
		var queryString = 'DELETE FROM ' + table + ' WHERE ' + location + ';'
		connection.query(queryString);
	}
}

module.exports = orm;
