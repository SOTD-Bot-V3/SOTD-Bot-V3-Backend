const mongoose = require('mongoose');
const settingsSchema = new mongoose.Schema({
	serverId: {
		type: String,
		required: true,
	},
	announcementChannelId: {
		type: String,
		required: true,
	},
	pingRoleId: {
		type: String,
		required: true,
	},

});
const serverSettings = mongoose.model('Server Settings', settingsSchema);

module.exports = { serverSettings };