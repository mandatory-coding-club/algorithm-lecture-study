## 퀵 정렬 (Quick Sort)

- 동작 방식
    1. 데이터를 분할하여 0 혹은 1개 길이의 배열이 될 때까지 분할
    2. 요소 하나를 선택하고 그 요소를 기준(pivot)으로 작은 요소들은 왼쪽으로 큰 요소들은 오른쪽으로 보냄
    3. 한 번 수행하고 나면 pivot은 올바른 위치에 존재하게 됨
    4. 배열을 분할하면서 2, 3을 반복
- pivot을 선택하는 기준에 따라 실행 시간이 달라진다.
- 예제에서는 첫 번째 요소를 pivot으로 선택

```jsx
function swap(array, i, j) {
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

function pivot(arr, start = 0, end = arr.length - 1) {
	var pivot = arr[start];
	var swapIdx = start;
	
	for(var i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}
	swap(arr, start, swapIdx);
	return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIdx = pivot(arr, left, right);
		// left
		quickSort(arr, left, pivotIdx - 1);
		// right
		quickSort(arr, pivotIdx + 1, right);
	}
	return arr;
}
```

## 퀵 정렬의 빅오 복잡도

| 시간 복잡도 (Best) | 시간 복잡도 (Average) | 시간 복잡도 (Worst) | 공간 복잡도 |
| --- | --- | --- | --- |
| O (n log n) | O (n log n) | O(n^2) | O (log n) |
- 이미 정렬된 배열일 때, pivot을 맨 처음 또는 마지막 요소로 선택하면 계속 하나 씩만 정렬되기 때문에 분할 시간 n과 곱해져 O(n^2)의 시간 복잡도를 가지게 됨
