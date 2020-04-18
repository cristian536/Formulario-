/*
 * exConsole.js
 * Created Date: Sunday, April 5th 2020, 1:22:56 pm
 * Author: Andrés Camilo Jiménez
 * creación del servidor en node.js
 *
 * Para el funcionamiento del proyecto, este debe ejecutarse desde la raiz del repositorio
 * node .\ServerExample\server.js
 */

const http = require('http');
const url = require('url');
const fs = require('fs');

// Puerto para el servidor
const PORT = 8080;

http
  .createServer(function (req, res) {
    // Lectura de los parametros GET
    var query = url.parse(req.url, true).query;
    // Escritura de los parametros en forma de objeto en la consola
    console.log(query);
    // Escritura de un archivo de los nombres que le llegan como parametro
    fs.appendFile(
      './ServerExample/data/persons',
      JSON.stringify(query) + '\r\n',
      function (err) {
        if (err) throw err;
        console.log('Saved to persons!');
      }
    );
    // Respuesta del servidor cargada de un archivo HTML
    fs.readFile('./ServerExample/index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  })
  .listen(PORT);

console.log(`Server started http://localhost:${PORT}/`);
