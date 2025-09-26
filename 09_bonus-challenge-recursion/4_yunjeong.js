// 배열의 배열을 받아들여 모든 값이 평활화(flattened)된 새 배열을 반환하는 재귀함수 작성
// Solution
// 배열 각 요소를 돌며 재귀 호출 및 concat 연결
function flatten(arr){
  if (arr.length === 0) return [];
  if (!Array.isArray(arr[0])) {
    // arr[0]이 배열인지 아닌지 분기 처리
    // 타입 체크 없이 동일하게 처리할 경우 arr[0]이 number 타입이라 return 할 때 오류 발생
    return [arr[0]].concat(flatten(arr.slice(1)));
  }
  return flatten(arr[0]).concat(flatten(arr.slice(1)));
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1],[[[2]]],[[[[[[[3]]]]]]]]]])) // [1,2,3]
