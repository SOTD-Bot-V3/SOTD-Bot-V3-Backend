const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { serverSettingsModel } = require('../../database/models/serverSettings');
router.use(bodyParser.json());
router.route('/:serverID').get(async (req, res, next) => {
	try {
		await serverSettingsModel.findOne({ serverId: req.params['serverID'] }).then(settings => {
			if (settings) {
				res.json(settings);
			}
			else {
				res.json({});
			}
		});
	}
	catch (error) {
		return next(error);
	}
});
router.route('/:serverID').post((req, res) => {
	res.sendStatus(202);
});

router.route('/:serverID').put((req, res) => {
	res.status(202).json(req.body);
});
router.route('/:serverID').patch((req, res) => {
	res.status(202).json(req.body);
});
router.route('/:serverID').delete((req, res) => {
	res.sendStatus(200);
});
module.exports = router;