const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	displayName: String,
	emails: Array
});

mongoose.model('users', userSchema);
