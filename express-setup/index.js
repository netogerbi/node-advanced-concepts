process.env.UV_THREADPOOL_SIZE = 1;
const crypto = require('crypto');
// DO NOT USE NODEMON
// CHEK HOW TO RESTART NODE ON DOCKER

const cluster = require('cluster');
console.log(cluster.isMaster);

if (cluster.isMaster) {

    // to test, run one fork, access the '/' route and the '/fast' route respectively and fastly
    // then do the same with all forks and compare...

    // cause execution of index to be executed as second instance (slave)
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    // cluster.fork();

} else { // child act like a server
    
    express = require('express');
    app = express();

    // will block the event loop with one fork
    // function doWork(duration) {
    //     const start = Date.now();
    //     while (Date.now() - start < duration) {
    //         //...
    //     }
    // }

    app.get('/', (req, res) => {

        // with one thread the requests will be processed one per time
        // but whit 2 forks will be processed at same time
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('Hii there!!');
        });
        
        // will be processed in eventloop - not OS our threadpool
        // will block eventloop every request and is cumulative
        // doWork(5000); 

        // res.send('Hii there!!')
    });

    app.get('/fast', (req, res) => {

        res.send('Hii there!!')

    });

    app.listen(3000);

}