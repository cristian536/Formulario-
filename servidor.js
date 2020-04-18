var http = require('http');
var url = require('url');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var query = url.parse(req.url, true).query;
    res.write('<p>My primer servidor</p>');
    res.write(`<p>el nombre es: ${query.nombre}</p>`);
    res.end();
  })
  .listen(8080);
