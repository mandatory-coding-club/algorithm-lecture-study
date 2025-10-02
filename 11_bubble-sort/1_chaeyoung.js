// 1. 정수 배열이 주어졌을 때, 이를 오름차순으로 정렬하는 함수를 구현하시오.
// Bubble Sort,

// 입력 예시
// [5, 3, 8, 4, 2]

// 출력 예시
// [2, 3, 4, 5, 8]

// solution
// - 인접한 두 원소를 비교해야함
// - for 루프 두번 돌려.
// - 두번째 루프에서 arr[j] > arr[j+1] 이면 두 원소 교환
// - 이미 정렬된 원소는 비교하지 않기 위해 j 루프범위 j < arr.length - i - 1 로 설정

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(111, bubbleSort([5, 3, 8, 4, 2]));
