# Hash Tables
데이터를 key-value 쌍 형태로 저장하는 자료구조

* 배열 과 비슷하지만, key가 숫자가 아니고 순서 없음
* 대신 key를 이용해 매우 빠르게 데이터를 찾을 수 있음
* 탐색, 삽입, 삭제 연산 모두에서 평균적으로 매우 빠름
* 모든 주요 언어가 해시 테이블을 기본 내장하고 있음!

| 언어                | 구현체             |
| ----------------- | --------------- |
| Python            | `dict`          |
| JavaScript        | `Object`, `Map` |
| Java / Go / Scala | `Map`           |
| Ruby              | `Hash`          |

### 해시 함수

* 해시 테이블은 내부적으로 배열을 사용함
* hash function을 사용해 key(문자열) → 숫자(index)로 변환

| 좋은 해시함수 조건 | 설명                             |
| ------------- | ------------------------------ |
| Fast          | 빠르게 계산 가능해야 한다 (O(1))          |
| Uniform       | 결과값이 고르게 분포되어야 함 (cluster 피하기) |
| Deterministic | 같은 입력은 항상 같은 결과를 반환해야 함        |

###  나쁜 해시함수 예제

```js
// ❌ 너무 느림
function slowHash(key) {
  for (var i = 0; i < 10000; i++) {
    console.log("everyday i'm hashing");
  }
  return key[0].charCodeAt(0);
}

// ❌ 모든 값이 같은 인덱스로 해시됨
function sameHashedValue(key) {
  return 0;
}

// ❌ 결과가 랜덤함 (Deterministic X)
function randomHash(key) {
  return Math.floor(Math.random() * 1000);
}
```


### 간단한 해시 함수 예제

```js
function hash(key, arrayLen) {
```js
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31; // 소수 사용 -> 해시값 고루 분포
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
```

## Collision (충돌)

같은 인덱스로 해시되는 다른 key가 생기는 현상.

이를 해결하기 위한 대표적인 두 가지 방법

### Separate Chaining (분리 연결법)

* 각 인덱스에 **배열이나 연결 리스트**로 여러 key-value를 저장한다.
* 즉, 충돌이 일어나도 한 칸 안에서 여러 값을 묶어서 저장한다.

```js
index 4 → [["salmon", "#FA8072"], ["darkblue", "#00008B"]]
```

### Linear Probing (선형 탐사법)

* 충돌이 발생하면 **다음 빈 슬롯**을 찾아 저장한다.
* 각 인덱스에는 하나의 값만 저장됨.

```js
index 4 → occupied
index 5 → 빈칸 → 여기에 저장!
```

## Hash Table 클래스 예제

```js
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // ✅ set(): key-value 추가
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  // ✅ get(): key로 value 가져오기
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  // ✅ keys(): 저장된 key 리스트 반환
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  // ✅ values(): 저장된 value 리스트 반환
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("purple", "#DDA0DD");
ht.set("violet", "#DDA0DD");

// 저장된 key를 순회하며 value 출력
ht.keys().forEach(function(key) {
  console.log(ht.get(key));
});

//#800000
//#FFFF00
//#808000
//#FA8072
//#F08080
//#C71585
//#DDA0DD
```

### Big O (시간 복잡도)

| 연산     | 평균 시간 복잡도 |
| ------ | --------- |
| Insert | **O(1)**  |
| Delete | **O(1)**  |
| Access | **O(1)**  |

최악의 경우(모든 key가 같은 인덱스로 몰릴 경우)는 O(n)까지 증가할 수 있음

### 요약 (Recap)

* Hash Table은 key-value 쌍을 저장한다.
* Hash Function을 이용해 key를 배열 인덱스로 변환한다.
* 좋은 해시 함수는 빠르고, 균등하며, 결정적이다.
* 충돌(Collision)은 불가피하며, Separate Chaining / Linear Probing으로 해결한다.
* 평균적으로 모든 주요 연산이 O(1)

