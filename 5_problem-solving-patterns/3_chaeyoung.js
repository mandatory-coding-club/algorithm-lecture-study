// 3.
// MULTIPLE POINTERS
// Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

// Very efficient for solving problems with minimal space complexity as well

// 3-1
// AN EXAMPLE
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

// SOLUTION
// 목표 : 배열의 첫 번째 값과 마지막 값을 더하여 0이 되는 값을 찾는다.
// 도무지 중첩 for문 없는 방법은 떠오르지 않아 강의 코드를 참고하였습니다.

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
}

// 3-2
// AN EXAMPLE
// countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

// SOLUTION
// 목표 : 배열에서 중복되지 않는 값의 개수를 세는 것
// 1. 배열을 순회하며 각 값을 객체에 저장한다.
// 2. 객체를 순회하며 값이 1인 것의 개수를 센다.

function countUniqueValues(arr) {
  let uniqueCounter = {};

  for (let i = 0; i < arr.length; i++) {
    uniqueCounter[arr[i]] = (uniqueCounter[arr[i]] || 0) + 1;
  }

  return Object.keys(uniqueCounter).length;
}
