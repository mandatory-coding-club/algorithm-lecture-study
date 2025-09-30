# Quick Sort 정리

## 개념

* **Quick Sort**는 `Merge Sort`처럼 **배열의 크기가 0 또는 1이면 이미 정렬되어 있다**는 사실을 이용한다.
* 배열에서 하나의 원소(**pivot**)를 선택하고, 그 원소를 기준으로 좌우로 나눈다.

  * pivot보다 작은 값들은 pivot의 왼쪽으로
  * pivot보다 큰 값들은 pivot의 오른쪽으로
* pivot이 적절한 위치에 자리 잡으면, pivot의 좌/우 부분 배열을 **재귀적으로 정렬**한다.

---

## Pivot Helper

Quick Sort를 구현하기 위해 먼저 **Pivot Helper** 함수가 필요하다.

### 역할

* 배열에서 하나의 원소를 pivot으로 지정한다.
* pivot보다 작은 값들을 왼쪽으로, pivot보다 큰 값들을 오른쪽으로 이동시킨다.
* 이 과정은 **in-place**로 진행된다. (새 배열 생성 ❌)
* 최종적으로 **pivot의 인덱스를 반환**한다.

### Pivot 선택

* 실행 속도는 pivot 선택에 따라 달라진다.
* **이상적 pivot**: 데이터의 **중간값(median)**
* 여기서는 단순화를 위해 **배열의 첫 번째 원소**를 pivot으로 사용한다.

---

## 예제

```js
let arr = [5, 2, 1, 8, 4, 7, 6, 3];

pivot(arr); 
// 결과: 4 (pivot이 최종적으로 index 4에 위치)

arr;
// 가능한 변형 예시들:
// [2, 1, 4, 3, 5, 8, 7, 6]
// [1, 4, 3, 2, 5, 7, 6, 8]
// [3, 2, 1, 4, 5, 7, 6, 8]
// [4, 1, 2, 3, 5, 6, 8, 7]
// → 중요한 건 pivot(5)이 index 4에 있고,
//   왼쪽은 작은 값, 오른쪽은 큰 값이라는 것
```

---

## Pivot Helper 의사코드

```
pivotHelper(arr, start=0, end=arr.length-1):
    pivot = arr[start]
    pivotIndex = start

    for i from start+1 to end:
        if arr[i] < pivot:
            pivotIndex++
            swap arr[i] with arr[pivotIndex]

    swap arr[start] with arr[pivotIndex]

    return pivotIndex
```

---

## Quicksort 의사코드

```
quickSort(arr, left=0, right=arr.length-1):
    if left < right:
        pivotIndex = pivotHelper(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)   // 왼쪽 정렬
        quickSort(arr, pivotIndex + 1, right) // 오른쪽 정렬
    return arr
```

---

## 자바스크립트 구현 예제

```js
function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      pivotIndex++;
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    }
  }
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
  return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// 실행 예시
console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));
// [1, 2, 3, 4, 5, 6, 7, 8]
```

---

## 시간 복잡도

| Case        | 시간 복잡도     | 공간 복잡도   |
| ----------- | ---------- | -------- |
| **Best**    | O(n log n) | O(log n) |
| **Average** | O(n log n) | O(log n) |
| **Worst**   | O(n²)      | O(log n) |

### Worst Case (O(n²))

* pivot 선택이 **항상 최소값/최대값**일 때 발생
* 예: 이미 정렬된 배열에서 첫 번째 원소를 pivot으로 잡을 경우

---

## 비교: 다른 정렬 알고리즘들과의 시간 복잡도

* **Bubble Sort**: O(n²)
* **Insertion Sort**: O(n²)
* **Selection Sort**: O(n²)
* **Quick Sort**: O(n log n)
* **Merge Sort**: O(n log n)
