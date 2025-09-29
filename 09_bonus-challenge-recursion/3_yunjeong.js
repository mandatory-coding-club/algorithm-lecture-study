// 배열과 콜백 함수를 받아들이는 재귀 함수 작성
// 배열 요소 중 하나라도 콜백 함수를 만족하면 true 반환
// Solution
// 하나라도 만족하면 true => || 연산자 사용
function someRecursive(arr, callback){
  // 빈 배열의 경우 만족하는 요소가 없으므로 false (true로 잘못 설정해 항상 true를 반환하는 오류)
  if (arr.length === 0) return false;
  // 재귀 호출 시 callback 인자 누락 오류! 파라미터 일치하도록 주의!
  return callback(arr[0]) || someRecursive(arr.slice(1), callback);
}

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)); // false
