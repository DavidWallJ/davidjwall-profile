const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	googleDisplayName: String,
	googleEmail: String,
	facebookId: String,
	facebookDisplayName: String,
	facebookEmail: String,
	linkedinId: String,
	linkedinDisplayName: String,
	linkedinEmail: String
});

mongoose.model('users', userSchema);
