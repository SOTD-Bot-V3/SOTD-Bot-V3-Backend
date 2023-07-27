const express = require('express');
const router = express.Router();
const suggestionsRouter = require('./suggestions');
const announcementsRouter = require('./announcements');
const settingsRouter = require('./settings');
const utilsRouter = require('./utils');
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
	windowMs: 5 * 60 * 1000,
	max: 1000,
	standardHeaders: true,
	legacyHeaders: false,
});
router.use(limiter);
router.use('/suggestions', suggestionsRouter);
router.use('/announcements', announcementsRouter);
router.use('/settings', settingsRouter);
router.use('/utils', utilsRouter);
module.exports = router;