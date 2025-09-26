// 배열과 값을 받아 그 값이 배열에 존재하는 인덱스를 반환하는 선형검색 함수
// 존재하지 않을 때는 -1 반환
// Solution
// for문 사용해 배열을 돌며 target과 값이 같은지 확인 후 인덱스 반환
// for문을 다 순회해도 반환하지 못하면 -1 반환
function linearSearch(arr, target) {
  for(int i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}
