/**
 * http://usejsdoc.org/
 */

var myMath = require('./myMath');
//myMath  

//맥스
var maxnum = myMath.myMax(2,12,24,25,1,2,5,1);

console.log(maxnum);

//미니멈
var mimnum = myMath.myMin(2,12,24,25,1,2,5,1);

console.log(mimnum);

//평균
var avgnum = myMath.Average(10,30,20,40,0);

console.log(avgnum);

//정렬 오름차순,내림차순

var asc = myMath.sortAsc(3,52,1,6,3,2,6,7);

console.log(asc);

var desc = myMath.sortDesc(3,52,1,6,3,2,6,7);

console.log(desc);


//숫자 배열을넣어서 배열에 그숫자가 몇개있나 검색하기 
var arr = [3,5,2,3,56,6,3,2,3,3,2,5,3,1,6,6,4];
var count = myMath.countNum(3,arr);

console.log(count);


var random = myMath.myRandom(-10, 1);
	console.log(random);

