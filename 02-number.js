//  ECMAScript의 Number
//  -> 산술 연산이 가능한 데이터 
let n1 = 7; //  Literal(소스에 직접 입력)
let n2 = Number(7) //   Number 객체를 이용한 생성 
console.log(n1, "==", n2, "?", n1 == n2);
console.log(typeof n1, typeof n2);

//  다양한 방식의 데이터 입력 
const red = 0xff0000;   //  16진수
const oct = 0o755;      //  8진수
const bin = 0b1101;     //  2진수

console.log(red, oct, bin);

//  Math 내장 객체
console.log(Math.round(3.5678));
console.log(Math.max(1, 5, 3, 2, 6, 7),
            Math.min(1, 5, 3, 2, 6, 7));
console.log(Math.round(3.567), 
            Math.trunc(3.567),
            Math.floor(3.567));
console.log("================== Casting");
//  자바스크립트는 변수 선언시 데이터 타입을 지정하지 않고,
//  중간에 데이터 타입이 변경될 수 있으므로 
//  데이터 형 변환이 필요한 경우가 많다

//  ParseInt, parseFloat : Number 타입으로 변환하는 함수 
console.log(parseInt("011"), typeof parseInt("011"));

console.log("11" + "12");
console.log(parseInt("11") + parseInt("12"));

console.log(parseInt("011", 2));  // 진법 변환
console.log(parseInt("0xFF0000", 16));
console.log(parseInt("123.456"));   //  정수 형태만 변환
console.log(parseFloat("123.456"));  //  실수 전체

console.log(parseInt(Math.PI)); //  float -> int