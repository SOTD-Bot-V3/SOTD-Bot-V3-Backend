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
		match: [/(https?:\/\/open.spotify.com\/(track|user|artist|album)\/[a-zA-Z0-9]+(\/playlist\/[a-zA-Z0-9]+|)|spotify:(track|user|artist|album):[a-zA-Z0-9]+(:playlist:[a-zA-Z0-9]+|))/],
	},
	songName: {
		type: String,
		required: true,
	},
	artistName: {
		type: String,
		required: true,
	},
	albumArtUrl: {
		type: String,
		required: true,
	},
	albumColor: {
		type: String,
		required: true,
	},
	suggestedBy:{
		type: String,
		required: true,
	},
});
const suggestionHistoryModel = mongoose.model('suggestionHisotry_v3', suggestionSchema);
module.exports = { suggestionHistoryModel };