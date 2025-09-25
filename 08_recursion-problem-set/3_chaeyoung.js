// 3. productOfArray
// 숫자 배열을 받아 모든 숫자의 곱을 반환하는 productOfArray라는 함수를 작성하시오.

// productOfArray([1, 2, 3]); // 6
// productOfArray([1, 2, 3, 10]); // 60

function productOfArraySlice(arr) {
  if (arr.length === 0) return 1;
  if (arr.length === 1) return arr[0];

  return arr[arr.length - 1] * productOfArraySlice(arr.slice(0, -1));
}

function productOfArrayPop(arr) {
  if (arr.length === 0) return 1;

  let lastElement = arr.pop();
  return lastElement * productOfArrayPop(arr);
}

// slice는 매번 새로운 배열을 생성하기 때문에 메모리 사용량이 증가할 수 있다고 합니다..!

console.log(productOfArraySlice([1, 2, 3])); // 6
console.log(productOfArraySlice([1, 2, 3, 10])); // 60
console.log(productOfArrayPop([1, 2, 3])); // 6
console.log(productOfArrayPop([1, 2, 3, 10])); // 60
console.log(productOfArraySlice([3])); // 3
console.log(productOfArrayPop([3])); // 3
