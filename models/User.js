const mongoose = require('mongoose');
const { Schema } = mongoose;
const OptionsSchema = require('./Options');

const userSchema = new Schema({
	googleId: String,
	googleDisplayName: String,
	googleEmail: String,
	facebookId: String,
	facebookDisplayName: String,
	facebookEmail: String,
	linkedinId: String,
	linkedinDisplayName: String,
	linkedinEmail: String,
	dateCreated: Date,
	options: [OptionsSchema]
});

mongoose.model('users', userSchema);
