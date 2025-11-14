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
    if (arr[mid] === 1) {
      if (arr[mid + 1] === 0 || mid === arr.length - 1)
        return arr.length - 1 - mid;
      left = mid + 1;
    } else {
      if (arr[mid - 1] === 1 || mid === 0) return arr.length - mid;
      right = mid - 1;
    }
  }
}

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([1, 0, 0, 0, 0, 0])); // 5
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
// Time Complexity - O(log n)

// 2.
// Divide and Conquer (편 가르고 정복하라) - sortedFrequency
// 정렬된 배열과 숫자가 주어졌을 때, 배열에서 해당 숫자의 발생 횟수를 세는 sortedFrequency라는 함수를 작성합니다.

// 예시

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
// Time Complexity - O(log n)

// 3.
// Divide and Conquer (편 가르고 정복하라)- findRotatedIndex
// 정렬된 숫자와 정수의 회전된 배열을 받아들이는 findRotatedIndex 라는 함수를 작성합니다. 이 함수는 배열에 있는 정수의 인덱스를 반환해야 합니다. 값을 찾을 수 없으면 -1을 반환합니다.

// 제약조건:

// Time Complexity - O(log n)

// Space Complexity - O(1)

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
// findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16) // 5
