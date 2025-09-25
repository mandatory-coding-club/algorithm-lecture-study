// 제가 보려고 정리한 배열 관련 메서드들 입니다! 혹 참고가 될까 하여!

# JavaScript 배열 조작 메서드 가이드

## 배열에 값 추가하는 방법들

### 1. **push()** - 배열 끝에 추가
```javascript
let arr = [1, 2, 3];
arr.push(4);        // [1, 2, 3, 4]
arr.push(5, 6);     // [1, 2, 3, 4, 5, 6]
```

### 2. **unshift()** - 배열 앞에 추가
```javascript
let arr = [2, 3, 4];
arr.unshift(1);     // [1, 2, 3, 4]
arr.unshift(0, -1); // [0, -1, 1, 2, 3, 4]
```

### 3. **인덱스로 직접 할당**
```javascript
let arr = [1, 2, 3];
arr[3] = 4;         // [1, 2, 3, 4]
arr[10] = 11;       // [1, 2, 3, 4, empty × 6, 11]
```

### 4. **spread 연산자로 새 배열 생성**
```javascript
let arr = [1, 2, 3];
let newArr = [...arr, 4];        // [1, 2, 3, 4]
let newArr2 = [0, ...arr, 4];    // [0, 1, 2, 3, 4]
```

## 배열에서 값 제거하는 방법들

### 1. **pop()** - 배열 끝에서 제거
```javascript
let arr = [1, 2, 3, 4];
let removed = arr.pop();  // removed = 4, arr = [1, 2, 3]
```

### 2. **shift()** - 배열 앞에서 제거
```javascript
let arr = [1, 2, 3, 4];
let removed = arr.shift(); // removed = 1, arr = [2, 3, 4]
```

### 3. **splice()** - 특정 위치에서 제거/추가
```javascript
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);        // 인덱스 2에서 1개 제거: [1, 2, 4, 5]
arr.splice(1, 2, 10);    // 인덱스 1에서 2개 제거하고 10 추가: [1, 10, 5]
```

### 4. **filter()** - 조건에 맞는 요소들만 남김
```javascript
let arr = [1, 2, 3, 4, 5];
let newArr = arr.filter(x => x !== 3);  // [1, 2, 4, 5]
```

## 배열 요소 접근하는 방법들

### 1. **인덱스로 접근**
```javascript
let arr = [1, 2, 3, 4];
console.log(arr[0]);     // 1
console.log(arr[arr.length - 1]); // 4 (마지막 요소)
```

### 2. **at()** - 음수 인덱스 지원
```javascript
let arr = [1, 2, 3, 4];
console.log(arr.at(-1)); // 4 (마지막 요소)
console.log(arr.at(-2)); // 3
```

## 배열 길이와 관련된 메서드들

### 1. **length** - 배열 길이 확인/설정
```javascript
let arr = [1, 2, 3];
console.log(arr.length);  // 3
arr.length = 2;           // [1, 2] (길이를 줄임)
arr.length = 5;           // [1, 2, empty × 3] (길이를 늘림)
```

### 2. **slice()** - 배열 일부 추출 (원본 변경 안함)
```javascript
let arr = [1, 2, 3, 4, 5];
let sliced = arr.slice(1, 3);  // [2, 3] (인덱스 1부터 3 전까지)
let sliced2 = arr.slice(-2);   // [4, 5] (뒤에서 2개)
```

## 재귀에서 자주 사용하는 패턴들

### 1. **첫 번째 요소와 나머지**
```javascript
function processArray(arr) {
  if (arr.length === 0) return;  // 기본 케이스
  
  let first = arr[0];           // 첫 번째 요소
  let rest = arr.slice(1);      // 나머지 배열
  
  // 처리...
  processArray(rest);           // 재귀 호출
}
```

### 2. **배열을 하나씩 줄여가기**
```javascript
function productOfArray(arr) {
  if (arr.length === 0) return 1;  // 기본 케이스
  
  return arr[0] * productOfArray(arr.slice(1));  // 첫 번째 × 나머지의 곱
}
```

## 메서드별 특징 비교

| 메서드 | 반환값 | 원본 변경 | 메모리 효율성 |
|--------|--------|------------ | --------------|
| `slice()` | 새 배열 | ❌ | ❌ (새 배열 생성) |
| `pop()` | 제거된 요소 | ✅ | ✅ (원본 수정) |
| `push()` | 새 길이 | ✅ | ✅ |
| `shift()` | 제거된 요소 | ✅ | ✅ |

## 재귀 함수 작성 시 권장사항

- **원본 보존이 중요**하다면 → `slice()` 사용
- **메모리 효율성**이 중요하다면 → `pop()`, `shift()` 사용
- **함수형 프로그래밍** 스타일을 선호한다면 → `slice()`, `filter()` 사용
- **성능**이 중요하다면 → `pop()`, `shift()` 사용
