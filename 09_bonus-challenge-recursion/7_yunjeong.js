// 단어 배열이 주어지면 각 단어가 대문자로 표시된 새 배열을 반환하는 재귀 함수 작성
function capitalizeWords (arr) {
  if(arr.length === 0) return [];
  
  return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

console.log(capitalizeWords(['car','taco','banana']));
