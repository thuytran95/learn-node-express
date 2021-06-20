const Course = require('../models/Course');
const { multipleMongooeseToObject } = require('../../utils/mongoose');
class MeController {
	//  [GET] / me/stored/courses
	storeCourses(req, res, next) {
		Promise.all([Course.find({}), Course.countDocumentsDeleted()])
			.then(([courses, deletedCount]) => {
				res.render('me/stored-courses', {
					deletedCount,
					courses: multipleMongooeseToObject(courses)
				});
			})
			.catch(next);
	}
	//  [GET] / me/trash/courses
	trashCourses(req, res, next) {
		Course.findDeleted()
			.then(courses => {
				res.render('me/trash-courses', {
					courses: multipleMongooeseToObject(courses)
				});
			})
			.catch(next);
	}
}

module.exports = new MeController();
