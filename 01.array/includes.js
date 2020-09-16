// [].includes(탐색할 원소의 값, 탐색을 시작할 인덱스)
// includes 메소드는 단순히 배열 안에 해당 원소가 존재하는지에 대한 여부만 반환한다.

const findFoo = ['foo', 'bar', 'el'].includes('foo')
const findAlice = ['foo', 'bar', 'el'].includes('alice')

console.log(findFoo)    // true
console.log(findAlice)  // false

// 탐색 시작 인덱스를 사용하지 않으면 0번 원소부터 탐색한다.
[10, 20, 30].includes(2)

// 1번 원소인 20번 부터 탐색을 시작한다.
[10, 20, 30].includes(2, 1)

// 배열의 길이(6)과 탐색 시작 인덱스(-1)을 더한 인덱스인 5번 원소인 6부터 거꾸로 탐색을 시작한다.
[1, 2, 3, 4, 5, 6].includes(2, -1)