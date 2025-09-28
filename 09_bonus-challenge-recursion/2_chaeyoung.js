// 2. isPalindrome
// 전달된 문자열이 팔린드롬(앞으로 읽으나 뒤로 읽으나 동일한 문자)인 경우 true 를 반환하는 isPalindrome이라는 재귀(recursive) 함수를 작성하시오. 팔린드롬이 아닐 경우 false 를 반환합니다.

// solution
// 1. 문자열 길이가 1이면 true
// 2. 문자열 길이가 2이면 두 문자가 같은지 확인
// 3. 문자열 길이가 3이상이면 첫 문자와 마지막 문자가 같은지 확인
// 4. 첫 문자와 마지막 문자가 같으면 중간 문자열을 확인
// 5. 중간 문자열이 팔린드롬이면 true, 아니면 false

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  } else return false;
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
