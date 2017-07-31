/**
 * http://usejsdoc.org/
 * 133 p 클라이언트
 */
const net = require('net');

var ip ='192.168.205.121';
var port = '63000';

var client = new net.Socket();

client.connect(port,ip,()=>{//접속이되면 콜백함수가 실행 
	console.log('cennect client' );
	
	client.write('안녕!');
	
});


client.on('data',(data)=>{
	console.log(data+'');
	client.end(); // 클라이언트접속끊기
//	client.destroy();//연결을 끊어버리는 메서드   // 클라이언트의 END이벤트처리를못함
	//close 와같다  접속끊기!
});


client.on('end',()=>{
	console.log('종료 ');
});


















































