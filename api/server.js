const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server;