const crypto = require('crypto');
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        res.send('Hii there!!');
    });
});

app.get('/fast', (req, res) => {
    res.send('Hii there!!')
});

app.listen(3000);

