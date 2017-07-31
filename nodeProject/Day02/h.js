/**
 * http://usejsdoc.org/
 * 파일다루기 
 */

const fs = require('fs'); // const 상수 , var 변수
//fs 파일시스템같은경우 비동기식으로 대부분 작성이되어있다 
//동기방식 
//var data = fs.readFileSync('../package.json','utf-8'); // (파일 ,인코딩유형)
//
//console.log(data);
//비동기방식

var data = fs.readFile('../package.json','utf-8',(err,data)=>{
	if(err){
		console.log('읽기오류 : '+err);
		return;
	}
	console.log(data);// 비동기라면 끝나고 찍어야하니까 언제시작될지모른다 그래서 안에서 콘솔을찍어야한다
}); // (파일 ,인코딩유형)

console.log('안녕');








