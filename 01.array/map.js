// [].map((현재원소, 현재인덱스, 전체배열)=>{})
// 배열의 순회가 끝나면 반환된 원소들로 이루어진 새로운 배열이 반환된다.
// 이때 생성된 배열은 원본 배열과는 완전히 다른 객체다.

const arr = [1, 2, 3].map((item, index, array) => {
    return item + 1
})

console.log(arr)    // [2, 3, 4]


const arr2 = [1, 2, 3].map((item, index, array) => {
    if (item !== 2) {
        return item
    }
})

// 콜백 함수 내에서 원소를 명시적으로 반환하지 않는다고 해서 해당 인덱스의 요소가 사라지는 것이 아니라
// undefined로 할당된다. map 메소드가 반환한 배열의 길이는 항상 원본 배열의 길이와 같다.
console.log(arr2)    // [1, undefined, 3]