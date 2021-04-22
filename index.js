#!/usr/bin/env node

const [ ,, ...args ] = process.argv;

const io = require('socket.io-client');
const ioClient = io.connect('http://localhost:4049');

ioClient.on('disconnect', () => {
    console.info('disconnect');
    ioClient.close()
});

ioClient.emit('commit', { path: args[0], source: args[1] });
