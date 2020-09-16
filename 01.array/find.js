// [].find((현재 원소, 현재 인덱스, 전체 배열) => {})
// find 메소드는 콜백 함수가 반환한 조건에 맞는 원소를 찾으면 해당 원소를 반환하고 없다면 undefined를 반환한다.

const value = [1, 2, 3].find((item, index, array) => {
    return item === 2
})

const value2 = [1, 2, 3].find((item, index, array) => {
    return item === 5
})

console.log(value)      // 2
console.log(value2)     // undefined


// [].findIndex((현재원소, 현재인덱스, 전체배열) => {})
// findIndex 메소드는 조건에 맞는 원소를 찾으면 해당 원소의 인덱스 값을 반환하고 없다면 -1을 반환한다.
const index = [1, 2, 3].findIndex((item, index, array) => {
    return item === 2
})
const index2 = [1, 2, 3].findIndex((item, index, array) => {
    return item === 5
})

console.log(index)      // 1
console.log(index2)     // -1


// ** findIndex 메소드와 indexOf 메소드 비교
const arr = [{ score: 100 }, { score: 30 }, { scroe: 75 }]

// findIndex 메소드의 경우 함수를 이용하여 원하는 원소를 바로 찾을 수 있다.
arr.findIndex(item => item.score === 100)

// indexOf 메소드의 경우 찾고자 하는 원소만으로 이루어진 배열을 사용해야 한다.
arr.map(item => item.score).indexOf(100)
