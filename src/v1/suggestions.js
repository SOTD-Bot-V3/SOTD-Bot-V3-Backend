const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// const { suggestionHistoryModel } = require('../../database/models/suggestions');
router.use(bodyParser.json());
router.route('/:serverID').get((req, res) => {
	res.sendStatus(200);
});
router.route('/:serverID/').post((req, res) => {
	res.sendStatus(202);
});

router.route('/:serverID/:suggestionID').put((req, res) => {
	res.status(202).json(req.body);
});
router.route('/:serverID/:suggestionID').patch((req, res) => {
	res.status(202).json(req.body);
});
router.route('/:serverID/:suggestionID').delete((req, res) => {
	res.sendStatus(200);
});

module.exports = router;