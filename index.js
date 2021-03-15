const express = require('express');
const parser = require('body-parser');

const server = express();
server.use(parser.json());
module.exports = server

server.listen(process.env.PORT || 5050, console.log("\nEndpoint Active..."));
server.get('/', (req, res) => res.json({ message: "Private Weather Endpoint" }));
server.use('/', require('./api'))