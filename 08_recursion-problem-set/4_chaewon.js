// 팩토리얼과 동일 요령으로 입력 값 밑의 숫자를 모두 더한다.

function recursiveRange(num) {
    if(num === 0) return 0;
    return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55 