// Naive 문자열 검색
// 두 개의 문자열을 받아 긴 문자열에서 짧은 문자열이 등장하는 횟수 반환
// Solution
// 1. long 문자열을 순회
// 2. 각 인덱스마다 short 문자열을 순회하면서 비교
// 3. 불일치하면 다음 인덱스 이동, 일치하면 count++
function naiveSearch(long, short) {
  if (short.length > long.length) return 0;

  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }

  return count;
}

console.log(naiveSearch("lore loled", "lol")); // 1
console.log(naiveSearch("lore loled", "lo")); // 2
