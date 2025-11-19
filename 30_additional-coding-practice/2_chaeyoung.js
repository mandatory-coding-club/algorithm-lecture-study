// 1.
// Divide and Conquer (편 가르고 정복하라) - countZeroes
// 1과 0으로 구성된 배열에 모든 1이 먼저 나오고 모든 0이 그 뒤에 이어지는 배열이 주어졌을 때, 배열에 있는 0의 개수를 반환하는 countZeroes라는 함수를 작성하세요.

// mid 1 -> right 확인
// mid 0 -> left 확인
// 모두 0일때, 모두 1일때 검증 -> mid 위치가 양끝에 갔을때!
function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // if (arr[mid] === 1) {
    //   if (arr[mid + 1] === 0 || mid === arr.length - 1)
    //     return arr.length - 1 - mid;
    //   left = mid + 1;
    // } else {
    //   if (arr[mid - 1] === 1 || mid === 0) return arr.length - mid;
    //   right = mid - 1;
    // }

    // 루프 끝나고 처리하는걸로 간단하게 변경
    // 루프가 끝나는 조건 left = right 일때 mid=left=right임
    // 이때 값이 1이면 0은 +1의 index에 위치하게 됨
    // 이때 값이 0이면 0은 -1의 index에 위치하게 됨
    if (arr[mid] === 1) left = mid + 1;
    else right = mid - 1;
  }
  return arr.length - left;
}

// console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
// console.log(countZeroes([1, 1, 1, 1, 1, 0, 0])); // 2
// console.log(countZeroes([1, 0, 0, 0, 0])); // 4
// console.log(countZeroes([1, 0, 0, 0, 0, 0])); // 5
// console.log(countZeroes([0, 0, 0])); // 3
// console.log(countZeroes([1, 1, 1, 1])); // 0
// Time Complexity - O(log n)

// 2.
// Divide and Conquer (편 가르고 정복하라) - sortedFrequency
// 정렬된 배열과 숫자가 주어졌을 때, 배열에서 해당 숫자의 발생 횟수를 세는 sortedFrequency라는 함수를 작성합니다.

// solution 1
// num이 있는 first 위치와 last 위치를 찾기
// num과 크기 비교해서 위치 유추
// function sortedFrequency(arr, num) {
//   function findFisrt() {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
//       if (arr[mid] < num) left = mid + 1;
//       else if (arr[mid] > num) right = mid - 1;
//       else {
//         if (mid === 0 || arr[mid - 1] !== num) return mid;
//         right = mid - 1;
//       }
//     }
//     return -1;
//   }

//   function findLast() {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
//       if (arr[mid] < num) left = mid + 1;
//       else if (arr[mid] > num) right = mid - 1;
//       else {
//         if (mid === arr.length - 1 || arr[mid + 1] !== num) return mid;
//         left = mid + 1;
//       }
//     }
//     return -1;
//   }

//   let first = findFisrt();
//   let last = findLast();

//   if (first === -1 || last === -1) return -1;

//   return last - first + 1;
// }

// solution 2
// first num을 찾고, 오른쪽으로 확장하기
function sortedFrequency(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < num) left = mid + 1;
    else if (arr[mid] > num) right = mid - 1;
    else right = mid - 1;
  }

  if (left >= arr.length || arr[left] !== num) return -1;

  right = left;
  for (let i = 0; i < arr.length - left; i++) {
    if (arr[left + i] !== num) break;
    right = left + i;
  }
  return right - left + 1;
}

// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
// Time Complexity - O(log n)

// 3.
// Divide and Conquer (편 가르고 정복하라)- findRotatedIndex
// 정렬된 숫자와 정수의 회전된 배열을 받아들이는 findRotatedIndex 라는 함수를 작성합니다. 이 함수는 배열에 있는 정수의 인덱스를 반환해야 합니다. 값을 찾을 수 없으면 -1을 반환합니다.

// 제약조건:
// Time Complexity - O(log n)
// Space Complexity - O(1)

// 1. 정렬된 구간 찾기 -> arr[left] < arr[mid] < arr[right]
// 정렬된 왼쪽에 있는 경우, 정렬된 오른쪽에 있는 경우
function findRotatedIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) return mid;

    // 정렬된 부분 찾는 조건문에 = 안해서 무한루프 빠졌었음!
    if (arr[left] <= arr[mid]) {
      if (arr[left] <= num && num <= arr[mid]) right = mid - 1;
      else left = mid + 1;
    }
    if (arr[mid] <= arr[right]) {
      if (arr[mid] <= num && num <= arr[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
}

console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); // 5
