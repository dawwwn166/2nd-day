console.log("Dawn");
let username = "Dawn";
const userage = 20;
console.log(" ~userage", userage);



console.log("변경 전", username);
username = "dawn2";
console.log("변경 후", username);
console.log("변경 전",typeof username);

let today= null;
console.log("today",typeof today);

function helloworld(){
    console.log("hello world");
}
helloworld();


function greetings(username){
    console.log("hello", username, "nice to meet you");
}
greetings("dawn");

let add = function(a, b){
    console.log(a + " + " + b + " = " + (a + b));
    console.log(`${a} + ${b} = ${a + b}`);
    return a + b;
}

add(add(1, 2), 10);
let score = 90;
let result = score >= 80 ? console.log("합격") : console.log("불합격");

const double = (x) => {
    return x * 2;
}

const introduce = (name, age) => {
    return '안녕하세요, ' + name + '님. 당신의 나이는 ' + age + '세입니다.';
  };
  
 let greet = introduce("정다운", "35");
  // 여기에 함수를 호출하는 코드를 작성하세요.// 당신의 이름과 나이를 argument로 사용하세요.
  console.log(greet);// 예시 결과: "안녕하세요, 김철수님. 당신의 나이는 25세입니다."


  // 여기에 orderSandwich 함수를 작성하세요
// orderSandwich 함수는 type 매개변수를 받고 타입에 따라 다른 재료를 반환해야 합니다


function orderSandwich(type) {
    let bread = '🥖'; // 빵
    let lettuce = '🥬'; // 양상추
    let tomato = '🍅'; // 토마토
    let cheese = '🧀'; // 치즈
    let bacon = '🥓'; // 베이컨
    let avocado = '🥑'; // 아보카도
    let cucumber = '🥒'; // 오이

    if (type === 'vegan') {
        return `${bread} + ${lettuce} + ${tomato} + ${avocado} + ${cucumber}`;
    } else if( type === 'basic') {
        return `${bread} + ${lettuce} + ${tomato} + ${cheese} + ${bacon}`;
    }
    else {
        return `${bread} + ${lettuce} + ${tomato} + ${cheese} + ${bacon}`;
    }
}
// 함수 테스트 - 아래 코드는 수정하지 마세요
console.log("기본 샌드위치 주문: " + orderSandwich());
console.log("기본 샌드위치 주문: " + orderSandwich('basic'));
console.log("비건 샌드위치 주문: " + orderSandwich('vegan'));

/* 예상 결과:
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
비건 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🥑 + 🥒
*/



const days = ['월', '화', '수', '목', '금', '토', '일'];

console.log(days[1]); // 예상 결과: 화요일
console.log(days[3]); // 예상 결과: 목요일

cosnt students = ["정다운", "김철수", "이영희", "박민수"];

let me = students[0];
console.log(me); // 예상 결과: 정다운   


