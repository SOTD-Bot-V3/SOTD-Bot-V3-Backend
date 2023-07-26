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
	},
	songName: {
		type: String,
		required: true,
	},

});
const announcementHistory = mongoose.model('Announcement History', announcementSchema);

module.exports = { announcementHistory };