## 해시 테이블

- `키 - 값` 쌍을 저장하는데 사용
- 해시 테이블의 `키`는 순서를 가지고 있지 않다.
- 값을 찾거나, 새로운 값을 더하거나 삭제하는데 빠르다.
- 많은 언어들이 이미 해시테이블이나 해시맵을 내장하고 있다.
    - python : Dictionaries
    - javascript : Objects, Maps
    - java & go : Maps
    - ruby : Hashes

## 해시 직접 구현할 때의 원리

- 인덱스나 숫자값으로 접근하는 것보다 `스트링 키`로 접근하는 것이 더 명료하다.
- 값을 키로 찾기 위해서는 키를 배열 인덱스로 변환하는 과정이 필요하다. 그 작업을 해주는 게 `해시화 함수(hash function)`
- 해시화 함수는 광범위하고 중요하게 사용됨 ex) 암호화 함수
- 정해진 길이의 값을 반환하는 단방향 함수

### 좋은 해시의 조건

- 빠르다 (상수의 시간 복잡도)
- 해시 값들이 특정 인덱스에 집중되지 않고 배열 전체에 균등하게 분산된다.
- 같은 입력 값에 대해 항상 같은 출력 값을 가진다.

```jsx
hash("pink", 10)

function hash(key, arraylen) {
	let total = 0;
	for (let char of key) {
		let value = char.charCodeAt(0) - 96
		total = (total + value) % arrayLen;
	}
	return total;
}
```

```jsx
function hash(key, arraylen) {
	let total = 0;
	let WEIRD_PRIME = 3;
	for (let i = 0; i < Math.min(key.length, 100); i++) {
		let char = key[i];
		let value = char.charCodeAt(0) - 96
		total = (total * WEIRD_PRIME + value) % arrayLen;
	}
	return total;
}
```

### 충돌 해결하기

1. Separate chaining 
    - 개별 체이닝
    - 같은 장소에 중첩 데이터 구조를 가지고 여러 데이터를 같이 저장
2. Linear Probing
    - 직선 탐색법
    - 각 자리에는 하나의 데이터만 저장
    - 이미 장소에 데이터가 있으면, 그 다음 빈 장소를 찾아 데이터를 저장

### 해시테이블 클래스 구현하기

- `set`
    - key와 value를 받기
    - key를 해싱하기
    - 키-값 쌍을 `separate chaining`을 사용해 저장하기
- `get`
    - key를 받기
    - key를 해싱하기
    - 키-값을 해시테이블에서 찾아 반환
    - 값을 반환
- `keys`
    - 해시 테이블을 순회하며 모든 `key`들을 반환
- `values`
    - 해시 테이블을 순회하며 모든 `값`들을 반환

```jsx
class HashTable {
	constructor(size=53) {
		this.keyMap = new Array(size);
	}
	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 3;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}
	set(key, value) {
		let index = this._hash(key);
		if(!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([key, value]);
	}
	get(key) {
		let index = this._hash(key);
		if(this.keyMap[index]) {
			for(let i = 0; i < this.keyMap[index].length; i++) {
				if(this.keyMap[index][i][0] === key) {
					return this.keyMap[index][i][1];
				}
			}
		}
		return undefined;
	}
	keys() {
		let keysArr = [];
		for(let i = 0; i < this.keyMap.length; i++) {
			if(this.keyMap[i]) {
				for(let j = 0; j < this.keyMap[i].length; j++) {
					if(!keysArr.includes(this.keyMap[i][j][0])) {
						keysArr.push(this.keyMap[i][j][0]);
					}
				}
			}
		}
		return keysArr;
	}
	values() {
		let valuesArr = [];
		for(let i = 0; i < this.keyMap.length; i++) {
			if(this.keyMap[i]) {
				for(let j = 0; j < this.keyMap[i].length; j++) {
					if(!valuesArr.includes(this.keyMap[i][j][1])) {
						valuesArr.push(this.keyMap[i][j][1]);
					}
				}
			}
		}
		return valuesArr;
	}
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")

ht.keys().forEach(function(key){
  console.log(ht.get(key));
});
```

## 해시테이블의 빅오 복잡도

- 삽입 : O(1)
- 삭제 : O(1)
- 접근 : O(1)
- 평균 케이스 기준
