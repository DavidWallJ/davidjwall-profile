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

	app.get(
		'/auth/facebook/callback',
		passport.authenticate('facebook', { failureRedirect: '/' }),
		function(req, res) {
			// Successful authentication, redirect home.
			res.redirect('/');
		}
	);

	// app.get('/auth/facebook', passport.authenticate('facebook'));
	//
	// app.get(
	// 	'/auth/facebook/callback',
	// 	passport.authenticate('facebook', {
	// 		successRedirect: '/api/thanks',
	// 		failureRedirect: '/'
	// 	})
	// );
	// Linkedin
	// app.get(
	// 	'/auth/linkedin',
	// 	passport.authenticate('linkedin', {
	// 		scope: ['r_basicprofile', 'r_emailaddress']
	// 	})
	// );

	// req.user comes from the deserializeUser function
	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
