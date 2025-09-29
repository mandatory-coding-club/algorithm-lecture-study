// 3. someRecursive
// 배열과 콜백을 받아들이는 someRecursive 라는 재귀(recursive) 함수를 작성하시오. 이 함수는 배열의 단일 값이 콜백에 전달될 때 true를 반환하면 true를 반환합니다. 그렇지 않으면 false를 반환합니다.

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// solution
// 1. 배열 0번째 검사후 slice하면서  재귀함수 호출
// 2. 배열에서 콜백을 만족하는 값 하나라도 있으면 true 반환
// 3. 검사할 arr 가 더 이상 없다 = 만족하는 값이 없다 false 반환

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
