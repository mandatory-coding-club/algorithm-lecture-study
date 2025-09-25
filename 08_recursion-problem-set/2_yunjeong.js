// 숫자를 받아 해당 숫자의 계승(팩토리얼)을 반환하는 함수를 재귀함수로 작성
function factorial(num){
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(0)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040
