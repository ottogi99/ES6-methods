// Object.keys(대상 객체) : 객체가 가지고 있는 속성의 키들을 배열로 반환하는 메소드
// Object.values(대상 객체) : 객체가 가지고 있는 속성의 값들을 배여로 반환하는 메소드

const obj = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj))   // ['a', 'b', 'c']
console.log(Object.values(obj)) // [1, 2, 3]


// ** for in 문과 keys 메소드의 비교
const obj2 = { a: 1, b: 2, c: 3 }
for (let key in obj2) {
    console.log(key, obj[key])
}

Object.keys(obj).forEach(key => console.log(key, obj[key]))