// 피보나치 수열 리팩토링 구현
// 1. Memoization 2. Tabulation

// 기존 재귀함수 구현 코드
function fibRecursive(n) {
  if (n <= 2) return 1;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// Memoization
// Solution
// 1. 이미 계산된 값을 저장하는 memo 배열도 매개변수로 함게 넘겨줌
// 2. memo[idx] 에 값이 있으면 가져다 쓰고, 없으면 저장 후 리턴
function fibMemo(n, memo=[]) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo[n] = res;
  return res;
}

// Tabulation
// 함수 안에 배열 선언
// 각 인덱스에 해당하는 값을 for문을 통해 순회하면서 저장
// 배열[n]의 값 반환
function fibTabulation(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for(let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 2] + fibNums[i - 1];
  }
  return fibNums[n];
}
