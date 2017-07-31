/**
 * http://usejsdoc.org/
 * 133 p 서버 
 */


const net = require('net');
//서버객체 만들기
var server = net.createServer((socket)=>{
	console.log('접속IP : '+socket.remoteAddress); // 클라이언트가올때마다 소켓을찍음
	
	
	socket.on('data',(data)=>{
		console.log('read data : '+data);
		socket.write('echo : '+data);
	});
	
	socket.on('end',()=>{
		console.log('접속종료');
	});
	
	
});




server.listen(63000); // listen (포트번호)
console.log('서버시작');





















































