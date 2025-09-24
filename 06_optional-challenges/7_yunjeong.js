// sliding window
function findLongestSubstring(str){
  if (!str) { return 0; }
  
  let start = 0;
  let end = 0;
  let maxLength = 0; // 최대 길이
  let lastSeen = {}; // 각 문자의 마지막 위치를 저장하는 객체
  
  while(end < str.length) {
    // if (lastSeen[str[end]]) 로 했다가 오류 발생. JavaScript에서 숫자 0도 falsy 값이므로
    // 인덱스 0 문자의 중복을 감지 못함
    // lastSeen[str[end]] !== undefined 라고 명시하거나 if(str[end] in lastSeen)
    if (lastSeen[str[end]] !== undefined) {
      // Math.max 사용 이유 : lastSeen에 저장된 위치가 현재 윈도우의 밖에 존재할 수 있음. start가 윈도우 밖(뒤)으로 가는 것을 방지
      start = Math.max(start, lastSeen[str[end]] + 1);
    }
    lastSeen[str[end]] = end;
    maxLength = Math.max(maxLength, end - start + 1);
    end++;
  }
  return maxLength;
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6
