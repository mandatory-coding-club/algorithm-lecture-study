// 7. Sliding Window - findLongestSubstring
// 문자열을 받아 모든 고유 문자가 포함된 가장 긴 하위 문자열의 길이를 반환하는 findLongestSubstring이라는 함수를 작성하세요.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

// ai의 힘을 빌렸습니다... 사실 아직 풀이가 이해가 가지 않아요..

function findLongestSubstring(str) {
  if (str.length === 0) return 0;

  let maxLen = 0;
  let left = 0;
  let charMap = {};

  for (let right = 0; right < str.length; right++) {
    let char = str[right];
    if (charMap[char] !== undefined && charMap[char] >= left) {
      left = charMap[char] + 1;
    }

    charMap[char] = right;

    maxLen = Math.max(maxLen, right - left + 1);
    console.log(right, left, char, charMap);
  }

  return maxLen;
}
