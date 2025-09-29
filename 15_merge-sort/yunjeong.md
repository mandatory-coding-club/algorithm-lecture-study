## 합병 정렬 (Merge Sort)

- 시간 복잡도를 개선하는 알고리즘 : O(n log n)
- O(n^2) 정렬 알고리즘(Quadratic Sorting)의 경우 큰 규모에는 적합하지 않음
- `분할`, `정렬`, `합병`의 조합
- 길이 8인 배열이 있다고 가정하면, 길이가 0 또는 1인 8개의 배열로 분할한 후 병합한다고 생각
- 동작 방식
    1. 정렬된 두 배열 병합을 담당할 함수를 먼저 구현
        1. O(n+m) 시간복잡도와 O(n+m) 공간복잡도를 가짐
        2. 입력된 두 배열을 가지고 만든 최종 배열을 위해 빈 배열 선언
        3. while loop 이용 권장
        4. 각 배열을 순회하며 변수 i,j를 이용해 첫 배열과 두 번째 배열의 요소를 차례로 비교 후, 빈 배열에 저장
        5. 한쪽 배열의 요소를 모두 처리한 후, 남은 배열의 요소들을 결과 배열에 추가
    2. 합병 정렬 함수의 작성
        1. 배열을 계속 반으로 나누기 → slice 함수 추천
        2. 나눠진 배열들을 길이가 0 또는 1이 될 때까지 재귀적으로 분할
        3. 배열이 작아지면 미리 작성해 놓은 병합 함수를 사용하여 병합

```jsx
function merge(arr1, arr2) {
	let results = [];
	let i = 0;
	let j = 0;
	while(i < arr1.length && j < arr2.length) {
	 if (arr2[j] > arr1[i]) {
		 results.push(arr1[i++]);
	 } else {
		 results.push(arr2[j++]);
	 }
	}
	while (i < arr1.length) {
		results.push(arr1[i++]);
	}
	while (j < arr2.length) {
		results.push(arr2[j++]);
	}
	
	return results;
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	
	return merge(left, right);
}
mergeSort([10, 24, 76, 73, 72, 1, 9]);
//merge([1, 10, 50], [2, 14, 99, 100]);
```

## 합병 정렬의 빅오 복잡도
| 시간복잡도 (Best) | 시간복잡도 (Average) | 시간복잡도 (Worst) | 공간복잡도 (Best) |
| ----------------- | -------------------- | ----------------- | ----------------- |
| O(n log n) | O(n log n) | O(n log n) | O(n) |
- 예외 없이 항상 O(n log n)의 시간복잡도
- 길이 1개의 배열 n개로 분할하는 과정 log n * 각 분할마다 합병할 때 O(n)번 비교
