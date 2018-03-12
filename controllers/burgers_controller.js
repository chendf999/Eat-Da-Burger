
const express = require('express');
const burger = require('../models/burger.js');

var routes = function(app){
	// display all burgers not devoured vs devoured
	app.get('/', function(req, res) {
		burger.selectAll(function(data){
			var notDevoured = [];
			var devoured = [];

			data.forEach(function(item){
				if (item.devoured) {
					devoured.push(item);
				} else {
					notDevoured.push(item);
				}
			});

			res.render('index', { notDevoured, devoured });
		});
	});

	// add a new burger
	app.post('/new', function(req, res){
		var burger_name = JSON.stringify(req.body.burger_name);
		burger.insertOne(
			['burger_name', 'devoured'], [burger_name, req.body.devoured]
		);
		res.end();
	});

	// update status
	app.put('/:id', function(req, res){
		var location = 'id = ' + req.params.id;
		burger.updateOne('devoured = true', location);
		res.end();
	});

	// add a new burger
	app.delete('/:id', function(req, res){
		var location = 'id = ' + req.params.id;
		burger.deleteOne(location);
		res.end();
	});
}

module.exports = routes;
