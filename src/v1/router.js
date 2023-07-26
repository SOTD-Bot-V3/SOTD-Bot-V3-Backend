const express = require('express');
const router = express.Router();
const suggestionsRouter = require('./suggestions');
const announcementsRouter = require('./announcements');
const settingsRouter = require('./settings');
router.route('/').get((req, res) => {
	res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
});
router.use('/suggestions', suggestionsRouter);
router.use('/announcements', announcementsRouter);
router.use('/settings', settingsRouter);
module.exports = router;