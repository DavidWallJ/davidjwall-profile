const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// the user there is whatever we just pulled from the db below
// serializeUser will set us up with a cookie/token on the user model instance
passport.serializeUser((user, done) => {
	// this id is the automatically generated mongo id NOT the googleId
	// the cookie will utilize the mongodb id
	done(null, user.id);
});

// the result of this is the deserialized user model in the req.user
passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

// Google
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		// this is the callback function that we're directed to with '/auth/google/callback'
		(accessToken, refreshToken, profile, done) => {
			// console.log('Profile info: ', profile);
			const { id, displayName, emails } = profile;
			User.findOne({ googleId: profile.id }).then(existingUser => {
				if (existingUser) {
					done(null, existingUser);
				} else {
					new User({
						googleId: id,
						googleDisplayName: displayName,
						googleEmail: emails[0].value
					})
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);

// Facebook
passport.use(
	new FacebookStrategy(
		{
			clientID: keys.facebookClientID,
			clientSecret: keys.facebookClientSecret,
			callbackURL: '/auth/facebook/callback',
			proxy: true,
			profileFields: ['id', 'displayName', 'photos', 'email']
		},
		function(accessToken, refreshToken, profile, cb) {
			// console.log('Profile: ', profile._json);
			const { id, name, email } = profile._json;
			User.findOne({ facebookId: id }).then(existingUser => {
				if (existingUser) {
					return cb(null, existingUser);
				} else {
					new User({
						facebookId: id,
						facebookDisplayName: name,
						facebookEmail: email
					})
						.save()
						.then(user => cb(null, user));
				}
			});
		}
	)
);
