# 🔄 Iteration & Recursion 정리

## 1. Recursion 이란?

* **정의**: 자기 자신을 호출하는 함수(process).
* **왜 중요한가?**

  * JSON.parse / JSON.stringify
  * DOM 탐색 (document.getElementById 등)
  * 객체/배열 순회
  * 복잡한 알고리즘에서 자주 등장
  * 반복문보다 **간결하고 직관적인 경우**가 많음

---

## 2. 재귀 함수의 동작 원리

* **Base Case**: 재귀가 멈추는 조건 (가장 중요한 개념!)
* **Different Input**: 매번 다른 입력값을 전달해야 함

### 예시

```js
function countDown(num){
  if(num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  countDown(num - 1);
}
```

```js
function sumRange(num){
  if(num === 1) return 1;
  return num + sumRange(num - 1);
}
```

* `return` 키워드가 없으면 값이 전달되지 않음

---

## 3. 콜 스택(Call Stack)과 재귀

* 재귀는 함수 호출이 **스택 형태**로 쌓였다가 base case에서부터 하나씩 해제됨.
* **문제 상황**

  * Base case 없음 → 무한 호출
  * return 누락 → 잘못된 결과
  * Stack overflow 발생 가능

---

## 4. 헬퍼 메서드 재귀 (Helper Method Recursion)

* 외부 변수에 결과를 저장하고, 내부 helper 함수에서 재귀 호출

```js
function collectOddValues(arr){
  let result = [];
  
  function helper(helperInput){
    if(helperInput.length === 0) return;
    if(helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}
```

---

## 5. 순수 재귀 (Pure Recursion)

* 외부 변수 없이 함수가 직접 새로운 배열/값을 반환

```js
function collectOddValues(arr){
  let newArr = [];
  if(arr.length === 0) return newArr;

  if(arr[0] % 2 !== 0) newArr.push(arr[0]);

  return newArr.concat(collectOddValues(arr.slice(1)));
}
```

### 순수 재귀 팁

* 배열 → `slice`, `concat`, 스프레드 연산자 사용 (원본 불변 유지)
* 문자열 → `slice`, `substr`, `substring`
* 객체 → `Object.assign`, 스프레드 연산자

---

## 6. 시간 & 공간 복잡도

* **시간 복잡도**: 입력 크기 대비 재귀 호출 횟수
* **공간 복잡도**: 최대 콜 스택 크기

---

## 7. Tail Call Optimization (꼬리 재귀 최적화)

* ES2015에서 일부 지원 → 콜 스택 크기를 늘리지 않고 재귀 가능
* 하지만 **브라우저 지원 미비** → 실무에서는 비현실적

---

## 8. 연습 문제 (Problem Set)

### 1) 거듭제곱

```js
function power(base, exp){
  if(exp === 0) return 1;
  return base * power(base, exp - 1);
}
```

### 2) 배열 곱셈

```js
function productOfArray(arr){
  if(arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}
```

---

## 9. Recap

* 재귀 함수 = 자기 자신을 호출하는 함수
* 항상 **Base Case** + **Different Input** 필요
* `return` 필수 → 데이터 전달
* Helper Method Recursion → 외부 스코프 활용
* Pure Recursion → 불변 데이터 반환
* 시간복잡도 = 호출 횟수, 공간복잡도 = 콜 스택 깊이
