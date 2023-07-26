const express = require('express');
const router = express.Router();
router.use(express.json());
router.route('/:serverID').get((req, res) => {
	res.status(501).send('<h1>Not Implemented</h1>');
});
router.route('/:serverID/').post((req, res) => {
	res.sendStatus(202);
});

router.route('/:serverID/announcementID').put((req, res) => {
	res.status(202).json(req.body);
});
router.route('/:serverID/announcementID').patch((req, res) => {
	res.status(202).json(req.body);
});
router.route('/:serverID/announcementID').delete((req, res) => {
	res.sendStatus(200);
});
module.exports = router;