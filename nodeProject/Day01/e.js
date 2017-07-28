/**
 * http://usejsdoc.org/
 */

//var os = require('os');
////console.log(os.cpus()); //cpu 정보

//console.log(os.hostname()); // 컴퓨터의이름


//파일 쓰기  
//비동기 방식의 파일쓰기 
//var fs = require('fs');
//
//var data = '파일을 써보도록하자 0728 이요한 Tacademy';
//
//var fname = 'test.txt';
//
//fs.writeFile(fname,data,function (err){
//	if(err){
//		console.log('쓰기실패');
//		return;
//	}
//	console.log('쓰기성공');
//
//}); //(파일의이름,내용,함수를 전달 (쓴내용이끝나고나면 실행되는함수  )  )
//
//console.log('이요한');


//동기방식 파일쓰기
//var fs = require('fs');
//
//var data = '파일을 써보도록하자 0728 이요한 Tacademy';
//
//var fname = 'test.txt';
//
//fs.writeFileSync(fname,data); //(파일의이름,내용,함수를 전달 (쓴내용이끝나고나면 실행되는함수  )  )
//
//console.log('이요한');



//비동기 파일읽기 
var fs = require('fs');
var fname = 'test.txt'; //경로를 잘읽어라
var newData ='이요한';
fs.readFile(fname,(err,data)=>{ //radaFile(파일이름,함수(에러,데이터))
	if(err){
		console.log('read err: 읽기실패 '+err);
		return;
	}
	newData = data;
	console.log('읽기성공');
	console.log('1'+newData);// 읽은데이터는 콜백안에서 쏴야한다 
	
});


console.log('2'+newData);// 비동기방식이라 이게먼저나오고 저게읽는게끝나면 저기서 다운이되니까 저기서 끝난후에 찍어줘야함
//파일이없으면 파일을 오픈하는데 실패하였다 













