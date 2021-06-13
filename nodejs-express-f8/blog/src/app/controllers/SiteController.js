const Course = require('../models/Course');
const { multipleMongooeseToObject } = require('../../utils/mongoose');
class SiteController {
	// tuyen duong luon khop tu tren xuong -> phai de tuyen duong trong o cuoi
	//  [GET] /search
	search(req, res) {
		res.render('search');
	}

	// [GET] /
	index(req, res, next) {
		Course.find({})
			.then(courses => {
				res.render('home', { courses: multipleMongooeseToObject(courses) });
			})
			.catch(next);
	}
}

module.exports = new SiteController();
