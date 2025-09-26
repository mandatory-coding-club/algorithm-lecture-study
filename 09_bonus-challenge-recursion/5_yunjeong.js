// 배열에 있는 각 문자열의 첫 글자를 대문자로 바꿔주는 재귀 함수
// Solution
// 배열 첫 요소부터 가져와 첫 글자 대문자로 변환
// 나머지 하위 배열도 재귀적으로 돌면서 concat으로 연결
function capitalizeFirst (arr) {
  if(arr.length === 0) return [];
  let str = arr[0].replace(arr[0][0], arr[0][0].toUpperCase());
  return [str].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
