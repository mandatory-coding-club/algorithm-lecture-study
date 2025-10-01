## 기수 정렬 (Radix Sort)

- 그동안의 알고리즘은 비교 정렬 알고리즘
- 기수 정렬은 두 요소를 직접적으로 비교하지 않는다.
- 자릿수가 큰 숫자가 자릿수가 작은 숫자보다 당연히 크다는 사실을 이용
- 동작 방식
    1. 1의 자리부터 시작해 각 자릿수에 있는 숫자(0~9)에 따라 배열 안의 요소들을 버킷에 분류
    2. 버킷의 순서대로 재정렬
    3. 다음 자릿수(10의 자리, 100의 자리…)로 이동하여 1,2를 반복
    4. 배열 안의 가장 큰 자릿수를 가진 요소의 자릿수만큼 반복

```jsx
// 해당 자릿수에 있는 숫자 구하기
function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// 숫자의 자릿수 구하기
function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// 가장 긴 자릿수 가진 숫자 구하기
function mostDigits(nums) {
 let maxDigits = 0;
 for (let i = 0; i < nums.length; i++) {
	 maxDigits = Math.max(maxDigits, digitCount(nums[i]));
 }
 return maxDigits;
}

function radixSort(nums) {
	let maxDigitCount = mostDigits(nums);
	for (let k = 0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({length: 10}, () => []);
		for (let i = 0; i < nums.length; i++) {
			let digit = getDigit(nums[i], k);
			digitBuckets[digit].push(nums[i]);
		}
		nums = [].concat(...digitBuckets);
	}
	return nums;
}
```

## 기수 정렬의 시간 복잡도

| 시간 복잡도 (Best) | 시간 복잡도 (Average) | 시간 복잡도 (Worst) | 공간 복잡도 |
| --- | --- | --- | --- |
| O(nk) | O(nk) | O(nk) | O(n+k) |
- n : 배열 길이
- k : 평균 자릿수
