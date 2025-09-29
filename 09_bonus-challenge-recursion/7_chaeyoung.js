// 7. capitalizeWords
// capitalizeWords라는 재귀 함수를 작성하시오. 단어 배열이 주어지면 각 단어가 대문자로 표시된 새 배열을 반환합니다.

function capitalizeWords(arr) {
  if (arr.length === 0) return [];
  let capitalized = arr[0].toUpperCase();
  return [capitalized, ...capitalizeWords(arr.slice(1))];
}

console.log(capitalizeWords(["i", "am", "learning", "recursion"])); // ['I', 'AM', 'LEARNING', 'RECURSION']
