// 피보나치 수열의 n 번째 숫자를 반환하는 재귀 함수 작성
// Solution
// n 번째 오는 숫자는 (n - 1)번째 + (n - 2)번째 숫자의 합임을 이용
function fib(num){
  if (num === 1 || num === 2) return 1;
  return fib(num - 2) + fib(num - 1);
}

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465
