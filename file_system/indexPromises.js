const fsPromises = require('fs').promises;
const path = require('path');

const fileOperations = async() => {

try{
    const data = await fsPromises.readFile(path.join(__dirname, 'starter.txt'), 'utf8');
    console.log(data);
   // await fsPromises.unlink(path.join(__dirname, starter.text)) -deletes the starter file
    await fsPromises.writeFile(path.join(__dirname, 'promises.txt'), 'More info');
    await fsPromises.appendFile(path.join(__dirname, 'promises.txt'), '\t\tContacts below');
    await fsPromises.rename(path.join(__dirname, 'promises.txt'), path.join(__dirname, 'promisesFile.txt'));
    const updatedData = await fsPromises.readFile(path.join(__dirname, 'promisesFile.txt'), 'utf8');
    console.log(updatedData);
} catch(err){
 console.log(`Error: ${err.message}`)}
};

fileOperations();

console.log("My name is Nelly");