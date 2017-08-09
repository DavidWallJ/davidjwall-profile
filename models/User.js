const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	googleDisplayName: String,
	googleEmail: String,
	facebookId: String,
	facebookDisplayName: String,
	facebookEmail: String
});

mongoose.model('users', userSchema);
