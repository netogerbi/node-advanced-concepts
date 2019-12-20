// limits the threadpool - number of threads to use
// max should be the number of cpus to be optmized?
process.env.UV_THREADPOOL_SIZE = 5;

module.exports = {

    multithreadrun: function () {

        const crypto = require('crypto');

        console.log('Using multiple threads - NodeJS Native')

        const start = Date.now();

        // The n 1,2,3,4 will run in multithread
        // node uses multhithread in libuv lib

        // will run in thread 1 cpu core 1
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            console.log('1:', Date.now() - start);
        });

        // will run in thread 2 cpu core 1
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            console.log('2:', Date.now() - start);
        });

        // will run in thread 3 cpu core 2
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            console.log('3:', Date.now() - start);
        });

        // will run in thread 4 cpu core 2
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            console.log('4:', Date.now() - start);
        });

        // will run in thread 4 cpu core 2 - same as before
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            console.log('5:', Date.now() - start);
        });
    }

}

