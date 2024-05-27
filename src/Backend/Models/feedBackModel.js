const mongoose = require("mongoose");

const Schema = mongoose.Schema;

feedBackSchema = new Schema(
	{
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		comment: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Feedback',feedBackSchema)