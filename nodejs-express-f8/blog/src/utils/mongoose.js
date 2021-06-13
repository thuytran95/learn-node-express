module.exports = {
	multipleMongooeseToObject: mogooses => {
		return mogooses.map(mongoose => mongoose.toObject());
	},
	mogooseToObject: mongoose => {
		return mongoose ? mongoose.toObject() : mongoose;
	}
};
