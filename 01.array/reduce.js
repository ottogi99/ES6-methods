// [].reduce((이전 연산의 결과, 현재 원소, 현재 인덱스, 전체배열) => {})
// 누산기의 원리에 기초한 작동 방식을 가진다.
// 누산이란 이전의연산 결과를 사용하여 다음 연산을 수행하며 어떠한 행위를 누적하는 것을 의미한다.

const sum = [1, 2, 3].reduce((acc, current, index) => {
    console.log(`이전 결과는 ${acc}, 현재 원소인 ${index}번 원소는 ${current}입니다.`)
    return acc + current
})
// 이전 결과는 1, 현재 원소인 1번 원소는 2입니다.
// 이전 결과는 3, 현재 원소인 2번 원소는 3입니다.

console.log(`합계는 ${sum}`)    // 6


// ** reduce 메소드의 두 번째 인자를 사용하여 초깃값을 할당한 모습
const sum2 = [1, 2, 3].reduce((acc, current, index) => {
    console.log(`이전 결과는 ${acc}, 현재 원소인 ${index}번 원소는 ${current}입니다.`)
    return acc + current;
}, 0)

// 이전 결과는 0, 현재 원소인 1번 원소는 1입니다.
// 이전 결과는 1, 현재 원소인 1번 원소는 2입니다.
// 이전 결과는 3, 현재 원소인 2번 원소는 3입니다.

console.log(`합계는 ${sum2}`)    // 6


// ** reduce 메소드를 사용하여 원소 중 최댓값을 찾는 코드
const arr = [12, 1, 100, 30]
const max = arr.reduce((acc, current)=> {
    return Math.max(acc, current)
})

console.log(`최대값은 ${max}`)    // 100


// ** reduce 메소드를 사용하여 배열의 중복된 요소를 제거하는 모습
const uniqueElement = [1, 1, 2, 3, 5, 3].reduce((acc, current) => {
    if (acc.indexOf(current) < 0) {
        acc.push(current)
    }
    return acc
}, [])

console.log(`유일값은 ${uniqueElement}`)

// ** reduce 메소드를 사용하여 원소의 개수를 세는 모습
const people = ['John', 'John', 'Evan', 'Martin', 'Martin']
const count = people.reduce((acc, current) => {
    if (acc.hasOwnProperty(current)) {
        acc[current]++
    }
    else {
        acc[current] = 1
    }
    return acc;
}, {})