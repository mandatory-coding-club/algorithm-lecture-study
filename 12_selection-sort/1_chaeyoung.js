// Selection Sort,

// 입력 예시
// [5, 3, 8, 4, 2]

// 출력 예시
// [2, 3, 4, 5, 8]

// solution
// - 첫번째 루프에서 최소값을 찾아서 첫번째 원소와 교환
// - 이미 정렬된 원소(앞에서 부터) 비교하지 않기 위해 j = i + 1 로 설정

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

console.log(selectionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
