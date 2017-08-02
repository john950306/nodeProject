/**
 * http://usejsdoc.org/
 */
const http = require('http');

const hostname = '192.168.205.138';
const port = 3000;

var cnt = 0;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  
  cnt++
  
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('count', cnt); // 헤더
  res.end('Hello World\n'+'num : '+cnt+'\n'); //바디 
  
  if(cnt >= 10){
	  server.close();
  }
  
});
server.on('close',()=>{
	console.log('close');
	process.exit();
}); // 서버클로즈되는거이벤트받아서 끝내버림

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});