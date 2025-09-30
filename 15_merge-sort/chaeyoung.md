# 고급 정렬 알고리즘 Intermediate Sorting Algorithms

## 학습 목표

* 지금까지 배운 정렬 알고리즘의 한계를 이해한다.
* **Merge Sort (병합 정렬)** 구현하기
* **Quick Sort (퀵 정렬)** 구현하기
* **Radix Sort (기수 정렬)** 구현하기

---

## 왜 배워야 할까? 

* 단순 정렬 알고리즘 (**버블 정렬, 선택 정렬, 삽입 정렬**)은 **큰 데이터셋에서 비효율적**이다.
* 예: `bubble sort`로 100,000개의 배열을 정렬하면 시간이 오래 걸린다.
* 더 효율적인 알고리즘은 **O(n log n)** 의 시간복잡도를 가진다.

---

## Faster Sorts

* **O(n²)** → **O(n log n)** 로 개선 가능
* 단순성 vs 효율성 → **Tradeoff** 존재
* 효율적인 알고리즘은 이해와 구현이 조금 더 복잡하다.

---

# 병합 정렬 (Merge Sort)

### 개념

* **분할 정복(Divide and Conquer)** 알고리즘
* 배열을 계속 반으로 쪼개서, **길이가 0 또는 1인 배열**이 될 때까지 나눈다.
* 이후 **병합(merge)** 단계에서 다시 합치면서 정렬한다.

---

## 동작 과정 (예시)

정렬할 배열:

```
[ 8, 3, 5, 4, 7, 6, 1, 2 ]
```

분할 과정:

```
[ 8, 3, 5, 4 ]     [ 7, 6, 1, 2 ]
[ 8, 3 ] [ 5, 4 ]  [ 7, 6 ] [ 1, 2 ]
[ 8 ] [ 3 ] [ 5 ] [ 4 ] [ 7 ] [ 6 ] [ 1 ] [ 2 ]
```

병합 과정:

```
[ 3, 8 ] [ 4, 5 ] [ 6, 7 ] [ 1, 2 ]
[ 3, 4, 5, 8 ] [ 1, 2, 6, 7 ]
[ 1, 2, 3, 4, 5, 6, 7, 8 ]
```

---

## 병합 함수

두 개의 **정렬된 배열**을 하나로 합치는 과정.

* 새로운 배열을 만들어서 정렬된 순서대로 합친다.
* 시간 복잡도: **O(n + m)**
* 공간 복잡도: **O(n + m)**

---

### 병합 함수 예제 코드

```javascript
// 두 개의 정렬된 배열을 병합하는 함수
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}

// 실행 예제
console.log(merge([100,200], [1,2,3,5,6]));
// 결과: [1, 2, 3, 5, 6, 100, 200]
```

---

## 병합 정렬 동작 원리

1. 배열을 반으로 나눈다.
2. 각각을 재귀적으로 `mergeSort` 실행한다.
3. `merge()` 함수로 두 배열을 병합한다.

---

### 병합 정렬 예제 코드

```javascript
// 병합 함수 (앞에서 만든 것 재사용)
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}

// 재귀적인 병합 정렬 함수
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

// 실행 예제
console.log(mergeSort([10,24,76,73]));
// 결과: [10, 24, 73, 76]
```

---

## 병합 정렬의 Big O

| 경우           | 시간 복잡도         |
| ------------ | -------------- |
| 최선     | **O(n log n)** |
| 평균  | **O(n log n)** |
| 최악  | **O(n log n)** |

* 공간 복잡도: **O(n)**
  → 새로운 배열을 계속 생성하기 때문
