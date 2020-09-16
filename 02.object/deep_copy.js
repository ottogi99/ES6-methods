const oldObj = {
    name: 'Foo',
    props: { age: 29 }
}

// ** spread 구문을 이용한 깊은 복사 예제
const newObj = { ...oldObj, props: { ...oldObj.props }}
console.log(oldObj.props === newObj.props)  // false


// ** JSON 객체의 STRINGIFY 메소드와 PARSE 메소드를 사용하는 방법
const stringified = JSON.stringify(oldObj)  // stringify : JSON 포맷을 문자열로 변환하는 메소드
const newObj2 = JSON.parse(stringified)     // parse : 문자열을 JSON 객체로 변환하는 메소드

console.log(oldObj.props === newObj2.props)  // false

// ** JSON 객체의 stringify 메소드와 parse 메소드의 동작
const obj = { name: 'Foo', age: 29 }
const stringified2 = JSON.stringify(obj)
const parsed = JSON.parse(stringified2)

console.log(typeof stringified2, stringified2)    // string, '{ "name": "Foo", "age": 29 }
console.log(typeof parsed, parsed)              // object, { name: 'Foo', age: 29 }