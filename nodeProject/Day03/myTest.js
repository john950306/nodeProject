/**
 * http://usejsdoc.org/
 */

const myfs = require('./myfilestream');

//파일읽기
var fname = 'test.txt';
var dirname = '..';

myfs.myFileRead(fname,dirname,(err,data)=>{
	if(err){
		console.log( '오류발생'+err);
	}
	console.log('Test : '+data);
	
});

//목록불러오기
myfs.myReadDir('.',(err,data)=>{
	if(err){
		console.log(err);
		return ;
	}
	data.forEach((v,i)=>{
		console.log(v);
	});
	
	
});



// -------- 동기작업처럼할려면
//myfs.myFileRead(fname,dirname,(err,data)=>{
//	if(err){
//		console.log( '오류발생'+err);
//	}
//	console.log('Test : '+data);
//	myfs.myReadDir('.',(err,data)=>{
//		if(err){
//			console.log(err);
//			return ;
//		}
//		data.forEach((v,i)=>{
//			console.log(v);
//		});
//		
//		
//	});
//});



// -----------------------
//const fs = require('fs');
//const path =require('path');
//
//var fname = 'test.txt';
//var dirname = '..';
//
//var dirfName = path.join(dirname,fname);
//
//var data1 = 'content';
//
//fs.readFile(dirfName,'utf8',(err,data)=>{
//	if(err){
//		console.log('읽기오류발생'+err);
//		return;
//	}
//	data1 = data;
//	console.log('함수안쪽 : ',data);
//	console.log('함수안쪽 this : ',this.data);
//});
//function a(){
//	console.log('a : '+data1);
//}
//
//setTimeout(a,5000);
////console.log('함수바깥쪽 : ' ,data);




// -- 함수 리턴 어쩌고 이해용도 


var arr = [2,3,5,1,23];

arr.forEach = (fn)=>{
	for(var i = 0 ; i < arr.length ; i++){
		fn(arr[i]);
	}
};

arr.forEach((v)=>{
	console.log(v);
});








