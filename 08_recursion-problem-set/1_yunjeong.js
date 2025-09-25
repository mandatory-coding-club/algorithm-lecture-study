// 밑과 지수를 받아 밑의 거듭제곱을 반환하는 함수를 작성
// 재귀함수를 사용해 `Math.pow()` 기능 모방
function power(base, exponent){
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(2,0)) // 1
console.log(power(2,2)) // 4
console.log(power(2,4)) // 16
