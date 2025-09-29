// 선택 정렬 함수 구현
// Solution
// 1. 배열을 순회하면서 가장 작은 요소와 비교하며 인덱스 교환
// 2. 순회를 마칠 때마다, 인덱스의 요소들끼리 교환
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i+1; j < arr.length; j++) {
      if(arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}
