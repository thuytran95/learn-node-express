const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handelebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

// static file & SCSS
app.use(express.static(path.join(__dirname, 'public')));

// middleware xu ly body: formData: urlencoded, fetch,axios, XMLRequest-> json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger - middleware
// app.use(morgan('combined'));

// Template engine
app.engine('hbs', handelebars({ extname: '.hbs' })); //define
app.set('view engine', 'hbs'); //set view engine-> name of handlebars
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

// local host IP: 127.0.0.1 -> localhost
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
