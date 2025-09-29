// 삽입 정렬 함수 구현
// Solution
// 앞의 배열들은 정렬되었다고 가정
// 배열을 순회하며 정렬된 앞의 배열들에서 본인의 자리를 찾아 삽입
// 내부 루프의 시작은 현재 인덱스의 앞 인덱스부터 0까지 내려가는 방식
function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    for(j = i - 1; j >=0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentVal;
  }
  return arr;  
}
