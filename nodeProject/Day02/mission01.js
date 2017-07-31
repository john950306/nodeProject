/**
 * http://usejsdoc.org/
 * 연습문제 01번  132 p 
 *  파일의 내용을 한 줄씩 읽어들여 화면에 출력하는 기능을 만들어보세요
 *  
 */
const fs = require('fs');
const readline = require('readline');
var fname = 'mission01.txt';

var finput = fs.createReadStream(fname);

const rl = readline.createInterface(finput,process.stdout); 

rl.on('line',(input)=>{ // line 이벤트는 input스트림라인종입력을 수신(\n,\r,\r\n)
	// 이것은 대게 사용자가 엔터나 리턴 키를 누르면 발생한다 
//	console.log(input);
var inputsplit = input.split(' ');
var name = inputsplit[0];
console.log(name); // 쩌러~
	
}); // line  이라는 이벤트 한줄읽어들일때마다작동

rl.on('close',()=>{
	console.log('read end');
});





