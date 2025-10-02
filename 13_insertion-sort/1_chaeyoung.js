// Insertion Sort,

// 입력 예시
// [5, 3, 8, 4, 2]

// 출력 예시
// [2, 3, 4, 5, 8]

// solution
// - 왼쪽은 첫번째 요소 정렬되어있다고 가정함.
// - 삽입할 원소 = arr[i] (i = 1 부터 시작, 루프 돌면서 증가)
// - 삽입할 원소의 이전 요소(정렬된 왼쪽 부분)와 크기 비교해야함 (j = i - 1 부터 시작, 루프 돌면서 감소)

// 고민했던 부분
// 처음에 while 문 안에서 arr[j] = insertValue; 를 넣어서 매번 교환하는 방식 (삽입 정렬이 아님!) 에서
// while 문 종료 후 arr[j + 1] = insertValue; 한번에 삽입 하는 방식으로 변경

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    //삽입할 원소
    let insertValue = arr[i];
    let j = i - 1;

    while (j >= 0 && insertValue < arr[j]) {
      arr[j + 1] = arr[j];

      j--;
    }
    // while 문이 종료되는 시점 = 삽입할 원소가 정렬된 왼쪽 부분의 원소보다 큰 경우
    // 그러면 삽입할 원소는 j+1 위치에 삽입되어야함.
    arr[j + 1] = insertValue;
  }
  return arr;
}

console.log(insertionSort([5, 3, 8, 4, 2]));
