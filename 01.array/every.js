// [].every((현재 원소, 현재 인덱스, 전체 배열)=>{})
// 주어진 콜백 함수의 테스트가 모두 통과되었다면 true를 반환하고
// 단 하나라도 테스트를 통과하지 못했다면 false를 반환한다.

const isValid = [1, 2, 3].every((item, index, array) => {
    return item < 3
})

const isValid2 = [1, 2, 3].every((item, index, array) => {
    return item > 0
})

console.log(isValid)    // false
console.log(isValid2)   // true

// every 메소드를 사용하여 유효성 검사를 진행하는 모습
// 스크립트 태그가 포함된 부적절한 메시지가 포함되어 있다.
const inputValues = ['안녕하세요!', '테스트 메시지입니다.', '<script>alert(1)</script>']
// 모든 메시지들을 검사하여 script 태그가 포함된 메시지가 존재하는지 검사한다.
const isValid3 = inputValues.every(item => !item.includes('<script>'))

if (isValid3) {
    console.log('올바른 메시지들입니다.')
}
else {
    console.log('올바르지 않은 메시지가 포함되어 있습니다.')
}