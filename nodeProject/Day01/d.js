/**
 * http://usejsdoc.org/
 */
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// https://nodejs.org/en/about/
//어바웃 톰켓서버를 대신한다 !
// const 는 파이널 같은것   지금 지정하면 다른값은 못씀 

// var ,const ,   모듈(exports)









