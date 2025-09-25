# 검색 알고리즘

## 1. 선형 검색 (Linear Search)

: 배열의 처음부터 끝까지 차례로 순회하며 비교하는 방식

- JavaScript가 사용하는 선형 검색
    - indexOf
    - includes
    - find
    - findIndex

```jsx
function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
		  return i;
		}
	}
	return -1;
}
```

### 시간복잡도

- Best : O(1)
- Avg: O(n)
- Worst: O(n)

## 2. 이진 검색 (Binary Search)

`정렬된` 배열에서 동작하는 검색.

- Divde and Conquer (분할 정복)의 사용!

```jsx
function binarySearch (arr, target) {
	let left = 0;
	let right = arr.length - 1;
	let mid = Math.floor((left + right) / 2);
	
	while (left <= right) {
	  if (arr[mid] === target) return mid;
	  else if (arr[mid] > target) {
		  right = mid - 1;
	  } else {
	    left = mid + 1;
	  }
	  mid = Math.floor((left + right) / 2);
	}
	
	return -1;
}
```

### 시간 복잡도

- Best: O(1)
- Worst & Avg: O(log n)

## 3. Naive String Search

```jsx
function naiveSearch(long, short) {
	let count = 0;
	for (let i = 0; i < long.length; i++) {
		for (let j = 0; j < short.length; j++) {
			if(short[j] !== long[i + j]) {
				break;
			}
			if (j === short.length - 1) {
				count++;
			}
		}
	}
	
	return count;
}
```
