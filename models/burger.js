
const orm = require('../config/orm.js');

var burger = {
	selectAll: function(cb){
		orm.selectAll('burgers', function(result){
			cb(result);
		});
	},
	insertOne: function(cols, vals){
		orm.insertOne('burgers', cols, vals)
	},
	updateOne: function(colVal, location){
		orm.updateOne('burgers', colVal, location);
	},
	deleteOne: function(location){
		orm.deleteOne('burgers', location);
	}
}

module.exports = burger;
