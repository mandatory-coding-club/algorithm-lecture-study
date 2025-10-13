// Merge Sort,

// 입력 예시
// [5, 3, 8, 4, 2]

// 출력 예시
// [2, 3, 4, 5, 8]

// solution
// 병합 함수 먼저 만들어보자 (강의에서 while문 권장)
//  1. 두 배열은 정렬되어 있다고 가정함
//  2. i,j 포인터 두개 만들어
//  3. 첫번째 while 문
//      두 배열 크기 비교 / 작은 값 배열에 추가 후 index 증가
//      두 배열 중 하나는 끝나게 됨
//  4. 두 배열의 나머지 값 넣는 while 문 생성 (두 배열 중 하나가 끝나면 남은 배열을 결과 배열에 추가)

// 병합 정렬 함수 만들기
// - 배열 반으로 나누고 배열 방합 함수 호출
// 근데 어떻게 배열안에 값이 한개 있을때까지 반으로 나누지?
// 나눈 배열 값을 다시 넣어서 재귀함수 호출!
// 처음에 basecase if문에서 arr 리턴을 안해줘서 undefined만 반환 ㅜㅡㅜ

function merge(arr1, arr2) {
  let res = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(merge([1, 10, 50], [2, 14, 99, 100])); //[1, 2, 10, 14, 50, 99, 100];
console.log(mergeSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
