// [].filter((현재원소, 현재 인덱스, 전체배열)=> {})
// 콜백 함수의 테스트를 통과한 원소들로만 이루어진 배열을 반환한다.

const arr = [1, 2, 3].filter((item, index, array)=> {
    return item < 3
})

console.log(arr)

// Falsy 값을 사용하여 유효한 객체만 필터링하는 예제
const users = [{ name: 'John' }, { name: 'Boss' }, { message: 'Hi!' }];
const arr2 = users.filter(item => {
    return item.name;
})

console.log(arr2)    // [{ name: 'John' }, { name: 'Boss' }]