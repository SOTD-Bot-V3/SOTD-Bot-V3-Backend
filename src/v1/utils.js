const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fetch = require('isomorphic-unfetch');
const { getData } = require('spotify-url-info')(fetch);
router.use(bodyParser.json());
router.route('/getSongInfo/:songID').get(async (req, res, next) => {
	const baseUrl = 'https://open.spotify.com/track';
	const combinedUrl = `${baseUrl}/${req.params.songID}`;
	console.debug(combinedUrl);
	try {
		await getData(combinedUrl).then(songDetails => {
			res.status(203).json(songDetails);
		});
	}
	catch (error) {
		return next(error);
	}

});
module.exports = router;