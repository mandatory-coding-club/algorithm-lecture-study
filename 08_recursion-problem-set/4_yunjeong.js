// 숫자를 받으면 0부터 전달된 숫자까지의 모든 숫자를 더하는 함수 작성
function recursiveRange(num){
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

// SAMPLE INPUT/OUTPUT
console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55 
