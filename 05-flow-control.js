//  if ~ else if ~ else 
//  switch ~ case
//  for, while, do while
//  모두 C계열 문법과 거의 동일

//  연습문제 1-1) for 문 구구단
//  2단 ~ 9단까지 루프 돌며 출력
for (let i = 2; i < 10; i++) {
    for (let r = 1; r < 10; r++) {
        console.log(i, "*", r, "=", i * r)
    } 
}


//  연습문제 1-2) while 문 구구단 
//  2단 ~ 9단까지 루프 돌며 출력
let i = 2;
while(i < 10) {
    let r = 1; 
    while(r < 10) {
        console.log(i, "*", r, "=", i * r);
        r++;
    }
    i++;
} 

//  연습문제 2-1) for 문을 이용 별 그리기 
/* 

*****
****
***
**
*

*/
for(i = 1; i < 6; ++i) {
    switch(i) {
        case 1: 
        console.log("*****");
        break;
        case 2: 
        console.log("****");
        break;
        case 3: 
        console.log("***");
        break;
        case 4: 
        console.log("**");
        break;
        case 5:
        console.log("*");
        break;
    }
}

//  연습문제 2-2) while 문을 이용 별 그리기
let o = 1; 
while(o < 6) {
    switch(o) {
        case 1: 
        console.log("*****");
        ++o;
        break;
        case 2: 
        console.log("****");
        ++o;
        break;
        case 3: 
        console.log("***");
        ++o;
        break;
        case 4: 
        console.log("**");
        ++o;
        break;
        case 5:
        console.log("*");
        ++o;
        break;
    }
} 

//  TODO: for ... in 
//      - 객체의 속성 key를 반복하는 루프 


//  TODO: for ... of 
//      - 컬렉션 객체(배열)의 요소 순환
