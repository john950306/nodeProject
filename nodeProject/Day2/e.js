/**
 * http://usejsdoc.org/
 */
// setTimeout();  (함수명 ,시간) //시간은대부분 ms  시간이지난후 함수명을실행해라
// setInterval();
// 주기적작업을원할때 
//clearTimeout(변수명); // 인터발을 끝낼수있는 ! 
function a (){
	console.log('a');
}

//setTimeout(a,1000); //한번만 실행한다
var time = setInterval(a,1000);//셋타임아웃과 비슷하다  하지만 얘는 시간마다 계속 ! 나오게된다 
// 셋 타임아웃은 한번만 시간줘서한번하고 
//셋 인터발 함수는 반환값을가지면서  주기적으로 계속 나온다 

function b(){
	clearTimeout(time);
}
setTimeout(b,5000); // 5초후에 정지시킴 

console.log('b');


//URI 자원                안드로이드 ,HTTP 두개가조금다르게작동  
//URL 자원 위치         전세게에서 유일한주소값을가진다 

//url
//http://www.naver.com:80/test/img/sam/aa.js?a=n&c=d
//path 
// /test/img/sam/aa.js
//query String 
// a=n&c=d
//url하면 다나오짐나
//uri 같은경우는 경로만나온다   
//  /test/img/sam/aa.js 

//안드로이드는  유니폼 리소스 아이덴티티스  구분하기위해서사용하는 것 
// 안드로이드는 url 이 uri의 일부분이다 

//http   url 에서 구분하는 부분 이 uri 

//안드로이드 자원을 구분할수있는것을 통칭적으로 uri 라고함 
























































































