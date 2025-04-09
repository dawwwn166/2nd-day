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

const students = ["정다운", "김철수", "이영희", "박민수"];

let me = students[0];
console.log(me); // 예상 결과: 정다운   

class multi_student{
    constructor(name, adress){
        this.name = name;
        this.adress = adress;
    }

    introduce(){
        console.log(`안녕하세요, ${this.name}입니다. 제 거주지는 ${this.adress}입니다.`);
    }
}

const studentList = [
    {
     name: "정다운",
     adress: "서울시 강남구"
    },
    {
     name: "김철수",
     adress: "서울시 강북구"
    },
    {
     name: "이영희",
     adress: "서울시 송파구"
    },
    {
     name: "박민수",
     adress: "서울시 강서구"
    }
    ];

    console.log(studentList[0].name);  


    studentList.forEach((value, index, array) => {
        console.log(value.name);
    });


    const user = {
        isLoggedIn : true,
        role : "admin",
        age : 99
        };

    const user2 = {
        isLoggedIn : true,
        role : "friend",
        age : 15
    };

    let canAccessAdminPage; // admin 페이지 접근 가능 여부를 저장할 변수

    if (user.isLoggedIn) {
        if (user.role === "admin") {
            canAccessAdminPage = true; // admin 페이지 접근 가능
        } else {
            canAccessAdminPage = false;     // admin 페이지 접근 불가능
        }
    }
    else {
        canAccessAdminPage = false; // 로그인하지 않음
    }

    console.log("admin 페이지 접근 가능 여부:", canAccessAdminPage); // 예상 결과: true

    // 간략화 코드
    const canAccessAdminPagev2 = user.isLoggedIn && user.role === "admin";
    console.log("admin 페이지 접근 가능 여부:", canAccessAdminPagev2); // 예상 결과: true

    // user를 guest로 변경
    user.role = "guest";
    const canAccessAdminPagev3 = user.isLoggedIn && user.role === "admin";
    console.log("admin 페이지 접근 가능 여부:", canAccessAdminPagev3); // 예상 결과: false

    // user2 로그인 판단
    const canAccessuserlevel = user2.isLoggedIn && user2.age >= "10";
    console.log("user2 로그인 여부:", canAccessuserlevel); // 예상 결과: true

    const userinPut = "";

    if (userinPut === "") {
        // 값이 비어있을 때 실행되는 코드
        console.log("값이 비어있습니다.");
    } 

    if (!userinPut) {
        // 값이 비어있을 때 실행되는 코드
        console.log("값이 비어있습니다.");
    }
    

    // color object를 만들고 색상 출력하기

    const color = {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF",
        yellow: "#FFFF00",
        black: "#000000",
        white: "#FFFFFF"
    };

    console.log(color.red); // 예상 결과: #FF0000
    console.log(color.green); // 예상 결과: #00FF00 

    // red 색상 변경하기
    color.red = "#FF5733"; // 새로운 색상으로 변경 예상 결과 : #FF5733
    console.log(color.red); // 예상 결과: #FF5733

    const {red, green, blue} = color;
    console.log(red); // 예상 결과: #FF5733
    console.log(green); // 예상 결과: #00FF00


    const animals = ["dog", "cat", "rabbit", "tiger"];

    const [a,b,c,d] = animals;
    console.log(a); // 예상 결과: dog

    const todoItems = {
        title : "할일",
        descriptions : "양갈비 먹기"
    }
    console.log(todoItems); // 예상 결과: { title: '할일', descriptions: '양갈비 먹기' }
    const newtodoItems = {
        ...todoItems,
        iscompleted : false,
        descriptions : "샐러드 먹기"
    }

    console.log(newtodoItems); // 예상 결과: { title: '할일', descriptions: '샐러드 먹기', iscompleted: false }