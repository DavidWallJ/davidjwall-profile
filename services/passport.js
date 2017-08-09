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

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		// this is the callback function that we're directed to with '/auth/google/callback'
		(accessToken, refreshToken, profile, done) => {
			// console.log('Refresh Token: ', refreshToken);
			// console.log('Access Token: ', accessToken);
			// console.log('Profile info: ', profile);
			User.findOne({ googleId: profile.id }).then(existingUser => {
				if (existingUser) {
					done(null, existingUser);
				} else {
					new User({
						googleId: profile.id,
						displayName: profile.displayName,
						emails: profile.emails
					})
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);

// facebook
passport.use(
	new FacebookStrategy(
		{
			clientID: keys.facebookClientID,
			clientSecret: keys.facebookClientSecret,
			callbackURL: '/auth/facebook/callback'
		},
		accessToken => {
			console.log(accessToken);
		}
		// function(accessToken, refreshToken, profile, done) {
		//   User.findOrCreate(..., function(err, user) {
		//     if (err) { return done(err); }
		//     done(null, user);
		//   });
		// }
	)
);
// linkedin
// passport.use(
// 	new LinkedInStrategy(
// 		{
// 			clientID: keys.linkedinClientID,
// 			clientSecret: keys.linkedinClientSecret,
// 			callbackURL: '/auth/linkedin/callback'
// 		},
// 		function(token, tokenSecret, profile, done) {
// 			User.findOrCreate({ linkedinId: profile.id }, function(err, user) {
// 				return done(err, user);
// 			});
// 		}
// 	)
// );
