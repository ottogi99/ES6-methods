// [].some((현재원소, 현재인덱스, 전체배열) =. {})
// 단 하나의 원소라도 콜백 함수를 통과한다면 true를 반환하고 
// 모든 원소가 콜백 함수의 테스트를 통과하지 못한다면 false를 반환한다.

const isValid = [1, 2, 3].some((item, index, array) => {
    return item < 2
})

const isValid2 = [1, 2, 3].some((item, index, array) => {
    return item < 0
})

console.log(isValid)    // true
console.log(isValid2)   // false

// some 메소드를 사용하여 사용자가 이벤트 대상인지 판별하는 모습
// 현재 진행하고 있는 할인 이벤트들은 각각 19살, 20살, 23살을 대상으로 하는 이벤트다.
const events = [
    { name: '수능 할인 이벤트!', targetAge: 19 },
    { name: '대학 새내기 할인 이벤트!', targetAge: 20 },
    { name: '취업준비생 할인 이벤트!', targetAge: 26}
]

// 사용자의 나이는 20살이다.
const user = { name: 'Evan', age: 20 }

const isEventTargetUser = events.some(event => event.targetAge === user.age)
console.log(isEventTargetUser)  // true