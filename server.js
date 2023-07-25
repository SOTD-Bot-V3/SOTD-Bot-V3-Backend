const express = require('express');
const app = express();
const config = require('./config.json');
const fetch = require('isomorphic-unfetch');
const { getData } = require('spotify-url-info')(fetch);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(config.PORT, () => {
	console.info(`Listening on http://localhost:${config.PORT}`);
});
app.get('/song/lookup/:id', async (req, res, next) => {
	try {
		let data;
		await getData(`https://open.spotify.com/track/${req.params['id']}`).then(outdata => {
			data = outdata;
			console.log(data);
			res.json(data);
		});
	}
	catch (error) {
		console.error(error);
		return next(error);
	}

});