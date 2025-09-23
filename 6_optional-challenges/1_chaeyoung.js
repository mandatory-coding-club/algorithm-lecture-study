// 1. 빈도수 세기 - sameFrequency
// sameFrequency라는 함수를 작성하세요. 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.

// 여러분의 솔루션은 반드시 다음과 같은 복잡성을 가져야 합니다.:

// Time: O(N)

// 예시 인풋:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

// Solution
// 문제 조건. 자릿수가 같아야함. 빈도수가 같아야함.
// 1. 자릿수가 다르면 false
// 2. 자릿수가 같으면 빈도수를 세서 같은지 확인
//  2-1. 12 -> [1,2] 배열로 변경
//  2-2. {1:1, 2:1} 객체로 변환
//  2-3. 확인

function sameFrequency(num1, num2) {
  digits1 = num1.toString().split("").map(Number);
  digits2 = num2.toString().split("").map(Number);

  if (digits1.length !== digits2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of digits1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of digits2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!key in frequencyCounter2) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }

  return true;
}
