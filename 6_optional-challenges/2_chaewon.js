//문제와 제약 조건 : 
//가변적인 수의 인자를 받아 개중 중복 값이 있는지 확인합니다.
// Time - O(n)
// Space - O(n)
// 보너스:
// Time - O(n log n)
// Space - O(1)

function areThereDuplicates(...args) {
    //빈도 카운터 패턴 -> 빈도 카운팅 후 2 이상의 값이 있는지 확인
    //다중 포인터 패턴 -> 정렬 후 두 포인터를 이용해 중복 값이 있는지 확인

    const sortedArgs = args.sort();
    for(let i= 0, j = 1; j < sortedArgs.length; i++, j++) {
        if(sortedArgs[i] === sortedArgs[j]) return true;
    }
    return false;
}


console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'd', 'e', 'f', 'b')) // true 
console.log(areThereDuplicates('')) // false




