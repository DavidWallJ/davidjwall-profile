const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {
	app.post('/api/options', requireLogin, (req, res) => {
		const { theme, genre, language, screenName } = req.body;

		User.options.update({ theme, genre, language, screenName });
	});
};

// Lecture 120
