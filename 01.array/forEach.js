// [].forEach((현재원소, 현재인덱스, 전체배열) => {})

[1, 2, 3].forEach((item, index, array)=> {
    console.log(`이 배열의 전체 원소 ${array.length}개 중에 ${index}번 인덱스 원소의 값은 ${item}입니다.`)
})