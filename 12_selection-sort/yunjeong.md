## 선택 정렬

- 배열을 차례로 진행하면서 최솟값의 인덱스를 찾아 순회의 가장 첫 부분과 비교한 후 교환

```jsx
function selectionSort(arr) {
	for (var i = 0; i < arr.length; i++) {
		var lowest = i;
		for(var j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		if (lowest !== i) {
			var temp = arr[i];
			arr[i] = arr[lowest];
			arr[lowest] = temp;
		}
	}
	return arr;
}

selectionSort([34, 22, 10, 19, 17]);
```

### 시간 복잡도 : O(n^2)
