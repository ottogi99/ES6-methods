// Object.assign(대상 객체, ...소스 객체들)
// assign 메소드는 타킷 객체와 소스 객체들을 병합하는 메소드다.

const targetObj = { a: 1, b: 2 }
const sourceObj = { b: 4, c: 3 }
const newObj = Object.assign(targetObj, sourceObj)
console.log(newObj) // { a: 1, b: 4, c: 3 }


// assign 메소드를 사용하여 객체를 복사하는 모습
const oldObj = { name: 'Foo' }
const notCopied = oldObj

// assign 메소드의 첫 번째 인자로 빈 객체를 사용하여 oldObj 객체를 복사한다.
const copied = Object.assign({}, oldObj)

console.log(oldObj === notCopied)   // true
console.log(oldObj === copied)      // false


// ** 얕은 복사로 인해 기존 객체의 값이 의도하지 않게 변경된 모습
const oldObj2 = {
    name: 'Foo',
    props: { age: 29 }
}
const newObj2 = Object.assign({}, oldObj2)

newObj2.props.age = 19

console.log(oldObj2 === newObj2)    // false
console.log(oldObj2.props.age)      // 19

// assign 메소드를 통해 복사된 객체라고 해도 내부 속성은 참조에 의한 호출을 하고 있다.
console.log(oldObj2.props === newObj2.props)  // true


// ** assign 메소드를 이용한 Object 안의 Object 복사 (깊은 복사)
const oldObj3 = {
    name: 'Foo',
    props: { age: 29 }
}
const newObj3 = Object.assign({}, { name: oldObj.name, props: Object.assign({}, oldObj.props) })

newObj3.props.age = 19

console.log(oldObj3 === newObj3)  // false
console.log(oldObj3.props.age)   // 19


// ** 이러한 구조는 데이터의 구조가 깊어질수록 코드의 복잡성을 높아지게 만들것이다.
// ** 이러한 경우 가독성을 위해 두 번째 방법인 Spread 구문을 사용할 수 있다.

// 다은은 deep_copy.js 참조하시오