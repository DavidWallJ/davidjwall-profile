const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {
	app.post('/api/options', async (req, res) => {
		await User.updateOne(
			{ _id: req.user.id },
			{
				options: req.body
			}
		).exec();

		res.send(req.user);
	});
};

// Lecture 120
