/**
 * http://usejsdoc.org/
 */

console.time('sTime');

var sum = 0 ; 
var i ; 
for(i = 0 ; i < 10000 ; i++){
	sum+=i;
	
}

console.log(`sum : ${sum}`);
console.timeEnd('sTime');
//작업경로 구하기 현재위치구하기 
console.log('filename: '+__filename);
console.log('dirname: '+__dirname);


//  비교용
///**
// * http://usejsdoc.org/
// */
//console.time('sTime');
//var sum = 0;
//var i;
//for(i=0; i< 10000; i++){
//   sum+= 1;
//}
//console.log(`sum : ${sum}`);
//console.timeEnd('sTime');
//
//console.log('filename : ' + __filename);
//console.log('dirname : ' + __dirname);














