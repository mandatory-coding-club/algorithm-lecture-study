## 동적 프로그래밍

- 복잡한 문제를 간단한 하위 문제로 쪼개서 푸는 접근법
- 하위 문제의 해답을 저장하여 재사용하는 최적화 접근법
- 동적 : 문제가 시간에 따라 달라지는 양상을 묘사하기 위해 쓴 단어
- 동적 프로그래밍의 조건 두 가지
    1. 반복되는 하위 문제들
        - 한 문제를 더 작은 문제로 나눌 수 있고, 그 조각들 중 일부가 재활용 가능하다.
        - 예시: 피보나치 수열
    2. 최적의 부분 구조
        - 하위 문제의 최적 해답을 통해서 더 큰 범주의 문제의 최적 해답을 구성할 수 있는 경우

## 피보나치 수열

- Fib(n) = Fib(n - 1) + Fib(n - 2)
- Fib(2) is 1
- Fib(1) is 1

```jsx
// 기존의 Recursive Solution
function fib(n) {
	if (n <= 2) return 1;
	return fib(n-1) + fib(n-2);
}
```

### ⇒ 빅오 관점에서의 평가

- 이미 계산한 함수도 중복해서 다시 계산하게 되어 좋지 않은 효율성
- `O(2^N)` 의 복잡도

### 해결하기 위한 방법 2 가지

1. Memoization
- 이미 계산한 부분은 저장해서 중복 계산 방지

```jsx
// Recursion + Memoization
function fib(n, memo=[]) {
	if(memo[n] !== undefined) return memo[n];
	if(n <= 2) return 1;
	var res = fib(n-1, memo) + fib(n-2, memo);
	memo[n] = res;
	return res;
}
```

⇒ 시간 복잡도 O(N)

1. Tabulation
- 기존의 `Top-Down`이 아닌 `Down-Top` 상향식 접근
- 루프와 같이 순환을 통해 작업하는 게 좋다.
- 공간 복잡도 면에서 유리하다.

```jsx
function fib(n) {
	if (n <= 2) return 1;
	var fibNums = [0, 1, 1];
	for(var i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i-1] + fibNums[i-2];
	}
	return fibNums[n];
}
```
