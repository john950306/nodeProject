/**
 * http://usejsdoc.org/
 */
const http = require('http');
const fs = require('fs');

const port = 63000;


var server = http.createServer();


server.listen(port, ()=>{
	console.log('서버시작!');
	
	
});

//server.on('connection', (s)=> { // 소켓이나오게된다
//	var addr = s.address(); // 소켓에있는어드레스  클라이언트의주소정보 
//	console.log('접속아이피  : '+addr.address);
//});

var num = 0;
server.on('request',(req,res)=>{
	num++;

	console.log('req method : '+req.method);
	console.log('req method : '+req.url);
	console.log('IP : '+req.socket.address().address); //커넥션에있는것을이렇게도쓸수있다 
	
	//json  의 컨텐트타입은    appliction/json
	res.writeHead(200, {'Content-Type':'text/html;charset=utf-8','a':'asdfds'});

	//	res.write('<html>');
//	res.write('<head>');
//	res.write('</head>');
//	res.write('<body>');
//	res.write('num : '+ num+'<br>');
//	res.write('</body>');
//	res.write('</html>');
	
	fs.readFile('a.html','utf8', (err, data)=> {
		if(err){
			res.write('서버가 바쁩니다 다시시도해주세요 ');
		}else{
			res.write(data);
		}
		res.end();
	});
	
	
//	res.end();
//	res.end('안녕 어서와 나의홈페이진 오늘처음이지?');
	
});


server.on('close',()=>{
	console.log('접속종룟 ^^');
});



































