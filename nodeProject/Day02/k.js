/**
 * http://usejsdoc.org/
 * unlink()
 * pipe()
 * exists
 */
const fs = require('fs');

var fname  = './sample.txt';

//fs.exists(fname, (exists)=>{
////console.log(exists?'있어파일!':'없는데뭐하냐'); // ms일때 파일의 대소문자를 구분안함  리눅스같은경우 대소문자 구분함
//if(exists){ // 파일이있으면 !실행 대소문자 구분안함
//}
//}); // 하지만 이건 디프리케이티드  stat or access 를써라 

fs.stat(fname,(err,stat)=>{
	if(err){// 에러가 널이면 존재한것이고 널이아니면 존재안한다는것이다 
		console.log('에러'+err);
		return;
	}else if(!err){
		console.log(stat);
		fs.unlink(fname,(err)=>{
			if(err){
				console.log('삭제실패'+err);//삭제하다실패하면에러가나옴
			}
			console.log('삭제성공');
		});
	}
});





