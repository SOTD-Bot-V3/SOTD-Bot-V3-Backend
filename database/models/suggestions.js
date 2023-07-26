const mongoose = require('mongoose');
const suggestionSchema = new mongoose.Schema({
	suggestionId:{
		type: String,
		required: true,
	},
	guildId:{
		type: String,
		required: true,
	},
	songId: {
		type: String,
		required: true,
	},
	songUrl: {
		type: String,
		required: true,
	},
	songName: {
		type: String,
		required: true,
	},
	used: {
		type: Boolean,
		required: true,
	},
});
const suggestionHistory = mongoose.model('Suggestion Hisotry', suggestionSchema);
module.exports = { suggestionHistory };