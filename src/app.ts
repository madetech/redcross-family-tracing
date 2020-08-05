import express from 'express';

const app: express.Application = express();

const listeningPort = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('<html><body><h1>Hello World!</h1></body></html>');
});

app.listen(listeningPort, function () {
    console.log(`Listening on http://localhost:${listeningPort}`);
});
