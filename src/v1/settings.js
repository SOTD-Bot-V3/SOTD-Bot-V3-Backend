const express = require('express');
const router = express.Router();
router.use(express.json());
router.route('/:serverID').get((req, res) => {
	res.sendStatus(200);
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