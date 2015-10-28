'use strict';

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notes');

module.exports = {
	topic: require('./topic.js'),
	exercise: require('./exercise.js'),
	course: require('./course.js'),
	lesson: require('./lesson.js')
};