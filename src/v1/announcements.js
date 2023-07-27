const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// const { announcementHistoryModel } = require('../../database/models/announcements');
router.use(bodyParser.json());
router.route('/:serverID').get(async (req, res, next) => {
	try {
		res.sendStatus(200);
	}
	catch (error) {
		return next(error);
	}
});
router.route('/').post(async (req, res, next) => {
	try {
		res.sendStatus(202);
	}
	catch (error) {
		return next;
	}
});

router.route(':/serverID/:announcementID').get(async (req, res, next) => {
	try {
		res.sendStatus(202);
	}
	catch (error) {
		return next;
	}
});

router.route('/:serverID/:announcementID').put(async (req, res, next) => {
	try {
		res.sendStatus(200);
	}
	catch (error) {
		return next(error);
	}
});
router.route('/:serverID/:announcementID').patch(async (req, res, next) => {
	try {
		res.sendStatus(200);
	}
	catch (error) {
		return next(error);
	}
});
router.route('/:serverID/:announcementID').delete(async (req, res, next) => {
	try {
		res.sendStatus(200);
	}
	catch (error) {
		return next(error);
	}
});
router.route('/:serverID').delete(async (req, res, next) => {
	try {
		res.sendStatus(200);
	}
	catch (error) {
		return next(error);
	}
});
module.exports = router;