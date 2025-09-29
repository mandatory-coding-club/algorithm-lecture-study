## 정렬이란?

- 컬렉션 (Collection)의 항목을 순서대로 재배열하는 과정

## 정렬 알고리즘을 배우는 이유?

- 데이터를 정렬하는 방법은 많고, 각각의 장단점을 가지고 있다. 상황마다 적합한 알고리즘을 선택하기 위해 필요하다.
- 면접에 자주 등장하는 주제

## JavaScript 내장 sort 함수가 동작하는 방식

- 배열의 모든 항목이 문자열로 변환되고, 해당 문자열의 유니코드 값을 비교해 정렬하는 방식 ⇒ 숫자 배열의 경우, 원하는 결과와 다를 수 있음
- 함수에 인자로 `comparator` 를 전달해 원하는 정렬 방식을 알려줄 수 있다.

```jsx
/* 1. 숫자를 오름차순으로 정렬 */
function numberCompare(num1, num2) {
	return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare);
// [4, 6, 10, 15]

/* 2. 문자열의 길이에 따라 오름차순 정렬 */
function compareByLen(str1, str2) {
	return str1.length - str2.length;
}

["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen);
// ['Colt', 'Steele', 'Algorithms', 'Data Structures']
```

## 버블 정렬

- 배열을 차례로 순회하며 다음 항목과 비교하면서 서로 자리를 교환하는 방식
- 한 번 순회할 때마다, 가장 큰 요소가 마지막에 위치. 반복할 때마다 비교해야 할 개수가 줄어듬
- 동작 방식
    1. 배열의 마지막부터 변수 i를 사용해 순회
    2. 그 안에서 다시 변수 j를 사용해 `i - 1`까지 순회
    3. `arr[j]`가 `arr[j+1]`보다 크면 교환

```jsx
function bubbleSort(arr) {
	for (var i = arr.length; i > 0; i--) {
		for (var j = 0; j < i - 1; j++) {
			if(arr[j]> arr[j+1]) {
				//var temp = arr[j];
				//arr[j] = arr[j+1];
				//arr[j+1] = temp;
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]];
			}
		}
	}
	return arr;
}

bubbleSort([37, 45, 29, 8]);
```

### 💡Swap 구현하기

```jsx
// ES5
function swap(arr, idx1, idx2) {
	var temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
	[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
```

### 최적화

- 가장 마지막까지 교환이 일어나지 않았다면, 이미 정렬된 상태임

```jsx
function bubbleSort(arr) {
	var noSwaps;
	for (var i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (var j = 0; j < i - 1; j++) {
			if(arr[j]> arr[j+1]) {
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
				noSwaps = false;
			}
		}
		if(noSwaps) break;
	}
	return arr;
}

bubbleSort([37, 45, 29, 8]);
```

## 시간 복잡도

- 일반적으로 O(n^2)
- 최선의 경우(이미 정렬된 배열), 선형화 된 O(n)
