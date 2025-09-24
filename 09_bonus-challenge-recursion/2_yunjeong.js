// 앞으로 읽으나 뒤로 읽으나 동일한 문자인지 판별하는 재귀 함수 작성
// Solution
// 1. 양 끝의 글자 비교
// 2. 나머지 문자들을 하위 문자열로 해서 다시 함수 호출
// 3. 1, 2가 동시에 true인지 판별
function isPalindrome(str){
  if (str.length <= 1) return true;
  return (str[0] === str[str.length - 1]) && isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
