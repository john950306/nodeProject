/**
 * http://usejsdoc.org/
 * 파일 오픈 write  close 
 */

//비동기방식
const fs = require('fs');

fs.open('./sample.txt'/*쓰기위해열어보자!*/,'w'/*모드*/, (err,fd)=>{
	if(err){
		console.log('에러발생'+err);
		return;
	}
	console.log(fd);
	var buf = new Buffer('안녕요한잉~');
	fs.write(fd,buf,0,buf.length,(err,written,buffer)=>{
		if(err){
			console.log(err);
		}
		
		console.log(written); // 몇바이트가 입력됐냐  숫자(바이트수)
		console.log(buffer+''); // 
		fs.close(fd,()=>{
			console.log('파일닫힘'); // 파일은 열고 뽑아낸뒤 닫아줘야한다 
		});
	});
//	fs.close(fd,()=>{
//		console.log('파일닫힘');
//	});
});







































































