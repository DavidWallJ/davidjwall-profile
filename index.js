const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
// IMPORTANT: mongoose models must be loaded prior to passport
// we require like this because there is nothing being retuned from these files
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
// we must tell passport that we want to use cookies; to use the serialize and deserialize funcitons
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		// this is for encryption and it's in an array because you can pass multiple
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

// require authRoutes file and immediately call the contained functions
// app is passed into the function
require('./routes/authRoutes')(app);
require('./routes/optionsRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	// express will serve up production assets like our main.js files
	// or main.css files
	app.use(express.static('client/build'));

	// express will serve up the index.html files
	// if it doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
