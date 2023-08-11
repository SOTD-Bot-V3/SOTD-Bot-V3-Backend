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
	globalSuggestionSubmissionsOptIn: {
		type: Boolean,
		required: true,
	},
	globalAnnouncementOptIn: {
		type: Boolean,
		required: true,
	},

});
const serverSettingsModel = mongoose.model('server_settings_v3', settingsSchema);

module.exports = { serverSettingsModel };
