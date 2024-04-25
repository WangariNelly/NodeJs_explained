const fs = require('fs');

if(!fs.existsSync('./newDir')){
fs.mkdir('./newDir', (err) => {
    if (err) throw err;
    console.log('New directory created')
})
}

if(fs.existsSync('./newDir')){
    fs.rmdir('./newDir', (err) => {
        if (err) throw err;
        console.log('New directory created')
    })
    }
    
