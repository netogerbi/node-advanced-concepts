const https = require('https');

module.exports = {

    
    getRequest: () => {

        const start = Date.now();
        // the libuv delegates to the OS to make the request
        https.request('https://www.google.com', (res) => {
            res.on('data', () => {});
            res.on('end', () => {
                console.log('1: ', Date.now() - start );
            });
        }).end()

    }
}
