const express = require('express');
const app = express();
const config = require('../config.json');
const v1Router = require('./v1/router');
const mongoose = require('mongoose');
console.log('Connecting to database...');
mongoose.connect(config.mongooseURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => {
	console.log('Connected to database');
	this.connection = mongoose.connection;
}).catch(err => {
	console.error(err);
	return null;
});

app.use('/api/v1', v1Router);
app.get('/', (req, res) => {
	res.redirect('/api/v1');
});

app.listen(config.port, () => {
	console.info(`Listening on http://localhost:${config.port}`);
});