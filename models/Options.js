const mongoose = require('mongoose');
const { Schema } = mongoose;

const optionsSchema = new Schema({
	theme: String,
	genre: String,
	language: String
});

module.exports = optionsSchema;
