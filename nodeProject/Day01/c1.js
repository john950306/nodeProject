/**
 * http://usejsdoc.org/
 */


//var calc = {};//이게아래로변경
//var calc = require('./c2.js');
var calc = require('./c2');//외부에있는 자바스크립트를 불러다쓴다  확장자는 생략이가능하다 

//require('c2.js').add(3,4);    //위에있는걸 이렇게도가져올수있다

//var add = function(a,b){
//	return a+b;
//};   //c2로 이동 

//calc.add =add ;
console.log(calc.add(3,4));
//console.log(calc.add(3,4));


//맥스를 만들고불러보자

console.log(calc.MAX);  //exports   쓴맥스는가져올수있다하지만 VAR 같은경우는 가져올수없다 













