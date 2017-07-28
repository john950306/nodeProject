/**
 * http://usejsdoc.org/
 * 0728 노드제이에스 
 */
console.log('안녕');

var name = '이요한';
var age = 23;
var sex = true;

//console.log('이름 : ' + name + ', 나이 : ' + age + ', 성별 : ' + sex );
//console.log('이름 : %s, 나이 : %d, 성별 : %b' , name, age, sex);
console.log(`이름 : ${name}, 나이 : ${age}, 성별 : ${sex}`);


var person = {
      name : '이요한',
      age : 23,
      sex : true
};

console.log(person);


// 비교용
///**
// * http://usejsdoc.org/
// */
//console.log('Hello World');
//var name = '홍길동';
//var age = 30;
//var sex = true;
////console.log('이름 : '+ name);
//console.log('이름 : %s 나이 : %d 성별 : %b'+ name,age,sex);
//console.log(`이름 : ${name} 나이 : ${age} 성별 : ${sex}`);
//
//var person = {
//      name : '홍명보',
//      age : 30,
//      sex : true
//};
//console.log(person);