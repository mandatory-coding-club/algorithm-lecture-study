// `정렬된` 배열과 값을 받아 그 값이 배열에 존재하는 경우 인덱스 반환하는 이진 검색 함수 작성
// 존재하지 않으면 -1 반환
// Solution
// 1. start, end, mid 포인터 사용
// 2. mid 인덱스에 해당하는 값과 target 비교
// 3. 같으면 mid 반환
// 4. target보다 크면 end = mid - 1
// 5. target보다 작으면 start = mid + 1
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1
