/**
 * http://usejsdoc.org/
 */
// myfilestream.js

//파일읽기
const fs = require('fs');
//동기
//exports.fileraedSync = (filedir)=>{
//	return fs.readFileSync(filedir,'utf-8');
//};
//비동기
exports.fileraed = (filedir,func)=>{
	fs.readFile(filedir,'utf-8',func);
};

//파일 쓰기
exports.filewrite = (writefile,writecontent,func)=>{

	fs.writeFile(writefile,'utf-8',0666,writecontent,func);
	
};

//폴더 생성
exports.newFolder = (dir,folder)=>{
	
};
////파일 삭제
//exports.
////파일 이름변경
//exports.
////파일 목록 불러오기
//exports.

