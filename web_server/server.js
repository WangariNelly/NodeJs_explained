const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const logEvents = require('./eventsLog');
const EventEmiter = require('events');

class Emitter extends EventEmiter { };

const myEmitter = new Emitter();

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    let path;
    if (req.url = ('/')) || (req.url = ('index.html')){
         
    }
})
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// myEmitter.on('log', (msg) => logEvents(msg));

// setTimeout(() => {
//     myEmitter.emit('log', 'Event emmitted');
// }, 2000);
