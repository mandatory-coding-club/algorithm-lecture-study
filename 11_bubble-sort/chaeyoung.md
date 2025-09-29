# 정렬 알고리즘 (Sorting Algorithms)

## 목표

* **버블 정렬(Bubble Sort)** 구현
* **선택 정렬(Selection Sort)** 구현
* **삽입 정렬(Insertion Sort)** 구현
* 간단한 정렬 알고리즘을 배우는 이유 이해

## 정렬이란?

정렬은 컬렉션(예: 배열)의 **항목을 특정 순서로 재배치**하는

### 예시

* 숫자를 오름차순으로 정렬
* 이름을 알파벳 순으로 정렬
* 영화 출시 연도 기준 정렬
* 영화 수익 기준 정렬

---

## JavaScript `sort()` 메서드

자바스크립트의 내장 sort()는 문자열 기준으로 비교하기 때문에 숫자 정렬 시 헷갈릴 수 있다.

```javascript
[ "Steele", "Colt", "Data Structures", "Algorithms" ].sort();
// [ "Algorithms", "Colt", "Data Structures", "Steele" ]

[ 6, 4, 15, 10 ].sort();
// [ 10, 15, 4, 6 ]
```

### 정렬 방법 지정하기

`sort()`는 **비교 함수(comparator)**를 인자로 받아 원하는 정렬 기준을 지정할 수 있다.

```javascript
// 숫자 크기 오름차순
function numberCompare(num1, num2) {
  return num1 - num2;
}
[ 6, 4, 15, 10 ].sort(numberCompare);
// [ 4, 6, 10, 15 ]

// 문자열 길이 오름차순
function compareByLen(str1, str2) {
  return str1.length - str2.length;
}
[ "Steele", "Colt", "Data Structures", "Algorithms" ].sort(compareByLen);
// [ "Colt", "Steele", "Algorithms", "Data Structures" ]
```

---

## 요소 교환(Swap)

정렬 알고리즘 구현 전, **교환 함수**가 필요합니다.

```javascript
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

---

## 🫧 버블 정렬(Bubble Sort)

> 가장 큰 값이 점점 위로 올라오는 방식

* 코드 구현은 단순하지만 **효율성은 낮음**.
* **이미 거의 정렬된 배열**에서는 빠르게 끝날 수 있다.

### 동작원리
- 매 라운드마다 인접한 두 값을 비교해서 큰 값을 뒤로 보낸다.
- 배열 끝에 가장 큰 값이 고정된다.
- 이 과정을 남은 요소에 반복한다.

### 예시:

```javascript
[5, 3, 4, 1, 2]
[3, 5, 4, 1, 2]
[3, 4, 5, 1, 2]
[3, 4, 1, 5, 2]
[3, 4, 1, 2, 5]
```
