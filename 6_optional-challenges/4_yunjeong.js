// 첫 번째 문자열이 두 번째 문자열의 부분 수열인지 확인
// 순서는 유지하되 연속적이지 않아도 됨
// Solution
// multiple pointers 사용
// 1. 변수 j를 이용해 str2를 순회하면서 str1[i]와 일치하는 문자 찾기
// 2. 일치하면 i++
// 3. i가 str1의 길이와 같으면 true
function isSubsequence(str1, str2) {
  if (!str1) return true;
  let i = 0;
 
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      i++;
    }
  }
  
  return i === str1.length;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
