const mongoose = require('mongoose');
const announcementSchema = new mongoose.Schema({
	announcementId: {
		type: String,
		required: true,
	},
	guildId: {
		type: String,
		required: true,
	},
	announcementDate: {
		type: Date,
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
	announcedBy:{
		type: String,
		required: true,
	},

});
const announcementHistoryModel = mongoose.model('announcement_history_v3', announcementSchema);

module.exports = { announcementHistoryModel };