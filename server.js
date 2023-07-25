const express = require('express');
const app = express();
const config = require('./config.json');

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(config.PORT, () => {
	console.info(`Listening on http://localhost:${config.PORT}`);
});
app.get('/lookup/')