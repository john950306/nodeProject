/**
 * http://usejsdoc.org/
 */

const fs = require('fs');
const path = require('path');

//exports.myFileRead =function(fname,dirname){
//	var filename = path.join(dirname,fname);
//	fs.readFile(filename,(err,data)=>{
//		if(err){
//			console.log( '오류발생'+err);
//		}
//		console.log('myfileSystem : '+data);
//		
//	});
//};


//파일읽기
exports.myFileRead =function(fname,dirname,func){
	var filename = path.join(dirname,fname);
	fs.readFile(filename,func);
};
//파일목록불러오기
exports.myReadDir = (dir,fn)=>{
	fs.readdir(dir,fn);
};






