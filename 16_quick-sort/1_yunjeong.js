// 퀵 정렬
// Solution
// pivot을 설정하고, pivot보다 작은 요소들은 앞으로, 큰 요소들은 뒤로 보내기
// 1. 첫 번째 요소를 pivot으로 설정한다고 가정
// 2. pivot보다 작은 요소들의 경계선 역할을 할 변수 선언 (인덱스 저장)
// 3. 다음 인덱스부터 순회하면서 pivot보다 작으면 교환, 경계선 변수++
// 4. 순회 완료 후, 변수에 저장된 인덱스에 pivot 위치 시킨 후 인덱스 반환
// 5. 피벗 기준으로 배열 분할하며 재귀적으로 호출
function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;
  
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
    }
  }

  // pivot을 최종 위치로 이동
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}
