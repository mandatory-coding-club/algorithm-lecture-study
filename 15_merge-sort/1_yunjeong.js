// 합병 정렬의 구현
// Solution
// 1. 병합 함수 작성
// - 빈 배열 선언
// - 배열1 인덱스 i, 배열2 인덱스 j
// - 더 짧은 배열의 길이만큼 루프를 돌면서 각 배열의 요소를 비교하며 빈 배열에 넣음
// - 해당하는 인덱스 증가
// - 루프 종료 후, 남은 요소들을 마저 넣어줌
// 2. 합병 정렬 함수 작성
// - 배열 길이가 0 또는 1이 될 때까지 분할 및 병합을 반복
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i++]);
    } else {
      results.push(arr2[j++]);
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i++]);
  }
  while (j < arr2.length) {
    results.push(arr2[j++]);
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
