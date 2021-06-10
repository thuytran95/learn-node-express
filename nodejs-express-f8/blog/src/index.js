const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handelebars = require('express-handlebars');
const app = express();
const port = 3000;

// static file & SCSS
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger - middleware
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handelebars({ extname: '.hbs' })); //define
app.set('view engine', 'hbs'); //set view engine-> name of handlebars
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/news', (req, res) => {
	res.render('news');
});

// local host IP: 127.0.0.1 -> localhost

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
