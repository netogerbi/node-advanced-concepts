process.env.UV_THREADPOOL_SIZE = 5;

const https = require('https');
const crypto = require('crypto');
const fs = require('fs');


const start = Date.now();

function getRequest () {

    const start = Date.now();
    // the libuv delegates to the OS to make the request not to the threads
    https.request('https://www.google.com', (res) => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log('request: ', Date.now() - start );
        });
    }).end()

};

function doHash () {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('hash: ', Date.now() - start);
    });
}

// down here uses OS tasks
getRequest();

// down here uses the threadpool

// once fs needs to verify the stats of file, the thread asks for the system and the process below goes waiting 
// while other tasks are executed

fs.readFile('app/multitask.js','utf8', () =>{
    console.log('FS: ', Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();

