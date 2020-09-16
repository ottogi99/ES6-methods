// Object.freeze(대상 객체)
// freeze 메소드는 대상 객체의 속성을 변경하는 것을 방어할 수 있는 메소드다.

const john = { age: 13 }

Object.freeze(john)     // 객체를 동결한다.

john.age = 10       // 속성의 갱신
john.name = 'Jonh'  // 속성의 추가
delete john.age      // 속성의 삭제

console.log(Object.isFrozen(john))  // true
console.log(john)   // { age: 13 }


// use strict 키워드를 사용하면 타입 에러가 발생한다.

function updateProp () {
    'use strict';
    john.age = 10
}

updateProp()