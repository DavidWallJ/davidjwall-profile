const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {
	app.post('/api/options', (req, res) => {
		// problem is here req.body is empty
		console.log('REQ.BODY: ', req.body);
		const { theme, genre, language } = req.body;

		// User.options.update({ theme, genre, language });
	});
};

// Lecture 120
