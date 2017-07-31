/**
 * http://usejsdoc.org/
 */
//모듈을 만들어서 이를 불러와서 실행하는
//   자바 스크립트를 만들어라


const myfs = require('./myfilestream');



myfs.fileraed('./resample.txt',(err,data)=>{
	if(err){
		console.log('읽기오류'+err);
		return;
	}
	console.log(data);
	
});