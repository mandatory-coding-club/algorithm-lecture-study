// 4. flatten
// 배열의 배열을 받아들이고 모든 값이 평활화(flattened)된 새 배열을 반환하는 flatten이라는 재귀(recursive ) 함수를 작성합니다.

//solution
//index 순서대로 isArray로 검사.
//isArray 이면 그 배열 그대로 재귀
//isArray 아니면 바로 새 배열에 추가(push or concat), 해당 배열값 제거 & 나머지 재귀(slice 이용)

function flatten(arr) {
  let newArr = [];

  function helper(input) {
    if (Array.isArray(input[0])) {
      helper(input[0]);
    } else {
      newArr.push(input[0]);
    }

    if (input.length === 1) return;
    helper(input.slice(1));
  }

  helper(arr);
  return newArr;
}

function flattenByReduce(arr) {
  return arr.reduce((acc, val) => {
    return Array.isArray(val) ? acc.concat(flattenByReduce(val)) : acc.concat(val);
  }, []);
}

console.log(flatten([1, 2, [3], [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
