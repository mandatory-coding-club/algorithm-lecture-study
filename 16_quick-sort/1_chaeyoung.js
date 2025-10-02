// Quick Sort,

// 입력 예시
// [5, 3, 8, 4, 2]

// 출력 예시
// [2, 3, 4, 5, 8]

// solution
// - 피벗 선택 (첫번째 요소)
// - 피벗을 기준으로 왼쪽은 피벗보다 작은 값, 오른쪽은 피벗보다 큰 값으로 분할
// - 분할된 배열에 대해 재귀적으로 퀵 정렬 적용
// - basecase는 정렬할구간이 1개 이하일때임(right-left<=1)

// 먼저 피벗헬퍼 함수 만들기
// 1. 피벗 선택 (첫번째 요소)
// 2. index를 올려가면서 arr[i]와 피벗을 비교함
//  2-1. arr[i]<피벗
//      피벗index ++
//      피벗index와 arr[i]자리 교환
//  2-3.arr[i]>피벗
//      아무일도 일어나지 않음. 즉 피벗index는 그대로임
// 3. if 문 밖에 마지막으로 arr[start]와 arr[피벗index]를 교환하여 피벗이 제자리에 가도록 함.

function pivotHelper(arr, start = 0, end = arr.length) {
  let pivot = arr[start];
  let pivotIndex = start;

  for (let i = start + 1; i < end; i++) {
    if (arr[i] < pivot) {
      pivotIndex++;
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    }
  }

  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];

  return pivotIndex;
}

console.log(pivotHelper([5, 2, 1, 8, 4, 7, 6, 3])); // 4

function quickSort(arr, start = 0, end = arr.length) {
  if (end - start <= 1) return arr;

  let pivotIndex = pivotHelper(arr, start, end);

  quickSort(arr, start, pivotIndex);
  quickSort(arr, pivotIndex + 1, end);

  return arr;
}

console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3])); // [1, 2, 3, 4, 5, 6, 7, 8]
