'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/', (req, res) => { res.json({ message: "The revolution starts with..."})});

app.use(bodyParser.json());
app.use('/api/chat-server', router);

module.exports = app;
module.exports.handler = serverless(app);