//used for readin large files

const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, 'starter.txt'), {encoding: 'utf8'});

const ws = fs.createWriteStream (path.join(__dirname, 'newStarter.txt'));
// rs.on('data',(dataChunk) => {
//     ws.write(dataChunk);
// })

rs.pipe(ws);