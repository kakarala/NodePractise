const http = require('http');

const loader = require('./src/loaders/loader');

const port = 3800;

const app = http.createServer((req, res) => {

    loader.loader(req, res);

});

app.listen(port);

console.log('server is running on port:' + port);
