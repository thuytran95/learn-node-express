const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handelebars = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// connect to db
db.connect();

// static file & SCSS
app.use(express.static(path.join(__dirname, 'public')));

// middleware xu ly body: formData: urlencoded, fetch,axios, XMLRequest-> json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// HTTP logger - middleware
// app.use(morgan('combined'));

// Template engine
app.engine(
	'hbs',
	handelebars({
		extname: '.hbs',
		helpers: {
			sum: function (a, b) {
				return a + b;
			}
		}
	})
); //define
app.set('view engine', 'hbs'); //set view engine-> name of handlebars
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

// local host IP: 127.0.0.1 -> localhost
app.listen(
	port,

	() => {
		console.log(`App listening at http://localhost:${port}`);
	}
);
