require('dotenv').config();

import http from 'http';
import app from './app';
const port = process.env.HOST_PORT || 4001;
const server = http.createServer(app);

server.listen(port, () => console.log(`App running in PORT: ${port}!!!`))