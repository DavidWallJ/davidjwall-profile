const passport = require('passport');

module.exports = app => {
	// Google
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'));

	// Facebook
	app.get(
		'/auth/facebook',
		passport.authenticate('facebook', {
			scope: ['public_profile', 'email']
		})
	);

	app.get('/auth/facebook/callback', passport.authenticate('facebook'));

	// Linkedin
	app.get(
		'/auth/linkedin',
		passport.authenticate('linkedin', {
			scope: ['r_basicprofile', 'r_emailaddress']
		})
	);

	app.get('/auth/linkedin/callback', passport.authenticate('linkedin'));

	// Logout
	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	});
	// Get current user
	// req.user comes from the deserializeUser function
	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
