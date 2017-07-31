/**
 * http://usejsdoc.org/
 * 이름바꾸기
 */

const fs = require('fs');

const path = require ('path');

//var oldName = path.join(__dirname,'sample.txt');
//var newName = path.join(__dirname,'resample.txt');
//fs.stat(oldName,(err,stat)=>{
//if(stat){
//fs.rename(oldName,newName,(err)=>{
//if(err){
//console.log('이름변경실패');	
//return;
//}
//console.log('이름변경완료');	
//});
//}else{
//console.log('파일명이없습니다');

//}
//});


//목록불러오기
fs.readdir('.','utf-8'/*안줘도디폴트로들어감*/,(err,files)=>{
	if(err){
		console.log('불러오기실패 :'+err);
		return;
	}
//	console.log(files);
	//배열이가지고있는것들 
	files.forEach((v,index)=>{ //펑션의인자는 files의 값 (값,배열의번호)
		console.log(v,index);//값을출력//인덱스는 배열의 몇번째에 그값이있는가를 알려줌
	});
});


