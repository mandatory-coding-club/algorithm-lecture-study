## 삽입 정렬 (Insertion Sort)

- 한 번에 하나를 선택해서 올바른 위치를 찾아 삽입
- 온라인 알고리즘(데이터가 실시간으로 들어올 때마다 바로 정렬)에 적합
- 동작 방식
    1. 배열의 2번째 요소부터 순회 시작 ⇒ 맨 처음에는 첫 번째 요소를 정렬된 부분으로 간주하기 때문
    2. 앞에 있는 값과 비교하여 필요하다면 교환
    3. 배열 끝까지 순회하면서 앞에 정렬된 부분에 올바른 위치에 삽입

```jsx
function insertionSort(arr) {
	for (var i = 1; i < arr.length; i++) {
		var currentVal = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j+1] = arr[j];
		}
		arr[j+1] = currentVal;
	}
	return arr;
}

insertionSort([2, 1, 9, 76, 4]);
```

### 시간 복잡도 : O(n^2)
