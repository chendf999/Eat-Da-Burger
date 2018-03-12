
const express = require('express');
const app = express();

const method = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require("express-handlebars");
const path = require('path');

var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require(path.join(__dirname, './controllers/burgers_controller.js'))(app);

app.listen(port, function(){
	console.log('Server port:' + port);
});
