/**
 * http://usejsdoc.org/
 */

const fs = require('fs');
const path= require('path');


var newFolder = path.join(__dirname,'Folder');

fs.stat(newFolder,(err,stat)=>{
	if(err){ // 파일이없을때만든다!
	fs.mkdir(newFolder,0666/*뭘까*/,(err)=>{
		if(err){
			console.log('폴더생성실패'+err);
		}
		console.log('폴더생성성공');
		
	});
	}else{
		console.log('이미존재함');
	}
});



