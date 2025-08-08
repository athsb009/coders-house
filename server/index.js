const http = require('http');
const express = require('express');
const cors = require('cors');
const { Server, LobbyRoom } = require('colyseus');
const { monitor } = require('@colyseus/monitor');

// Import the Coderhouse room
const { Coderhouse } = require('./rooms/Coderhouse');

const port = Number(process.env.PORT || 2567);
const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const gameServer = new Server({
  server,
});

// Register room handlers
gameServer.define('lobby', LobbyRoom);
gameServer.define('coderhouse', Coderhouse, {
  name: 'Public Lobby',
  description: 'Make new friends and prepare for your next adventure!',
  password: null,
  autoDispose: false,
});
gameServer.define('custom', Coderhouse).enableRealtimeListing();

// Register colyseus monitor AFTER registering your room handlers
app.use('/colyseus', monitor());

gameServer.listen(port);
console.log(`🚀 Coderhouse Metaverse Server listening on port ${port}`); 