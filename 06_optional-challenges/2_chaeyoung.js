// 2.빈도수 세기 / 다중 포인터 - areThereDuplicates
// 가변적인 수의 인수(a variable number of arguments)를 받아들이고 전달된 인자 중 중복이 있는지 확인하는 areThereDuplicates라는 함수를 구현합니다.  빈도 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이 문제를 해결할 수 있습니다.

// 예시:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// 제약 조건:

// Time - O(n)

// Space - O(n)

function areThereDuplicates1(...args) {
  frequencyCounter = {};
  for (let val of args) {
    frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
  }
  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) return true;
  }
  return false;
}

// 보너스:

// Time - O(n log n)

// Space - O(1)

function areThereDuplicates2(...args) {
  args.sort();
  for (let i = 0; i < args.length - 1; i++) {
    if (args[i] === args[i + 1]) return true;
  }
  return false;
}

console.log(areThereDuplicates2(1, 2, 3));
console.log(areThereDuplicates2(1, 2, 2));
console.log(areThereDuplicates2("a", "b", "c", "a"));
