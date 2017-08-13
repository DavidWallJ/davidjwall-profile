// react app generation
// time to go back and add linkedin

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LinkedinStrategy = require('passport-linkedin').Strategy;
// const passportStrategies = require('./strategyFields');
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
		async (accessToken, refreshToken, profile, done) => {
			// console.log('Profile info: ', profile);
			const { id, displayName } = profile;
			const email = profile.emails[0].value;

			const existingUser = await User.findOne({ googleId: profile.id });

			if (existingUser) {
				return done(null, existingUser);
			}

			const user = await new User({
				googleId: id,
				googleDisplayName: displayName,
				googleEmail: emails
			}).save();
			done(null, user);
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
		function(accessToken, refreshToken, profile, done) {
			// console.log('Profile: ', profile._json);
			const { id, email } = profile._json;
			const displayName = profile._json.name;

			User.findOne({ facebookId: id }).then(existingUser => {
				if (existingUser) {
					return done(null, existingUser);
				} else {
					new User({
						facebookId: id,
						facebookDisplayName: displayName,
						facebookEmail: email
					})
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);

passport.use(
	new LinkedinStrategy(
		{
			consumerKey: keys.linkedinClientID,
			consumerSecret: keys.linkedinClientSecret,
			callbackURL: '/auth/linkedin/callback',
			proxy: true,
			profileFields: ['id', 'first-name', 'last-name', 'email-address']
		},
		function(token, tokenSecret, profile, done) {
			console.log('Profile: ', profile._json);
			const { id } = profile._json;
			const displayName = profile._json.firstName;
			const email = profile._json.emailAddress;

			User.findOne({ linkedinId: id }).then(existingUser => {
				if (existingUser) {
					return done(null, existingUser);
				} else {
					new User({
						linkedinId: id,
						linkedinDisplayName: displayName,
						linkedinEmail: email
					})
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);
