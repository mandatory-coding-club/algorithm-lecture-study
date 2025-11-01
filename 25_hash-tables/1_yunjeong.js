// 해시테이블 구현
// Seperate Chaining 방식으로 충돌 해결
// _hash, set, get, keys, values
class HashTable {
  constructor(size) {
    this.keyMap = new Array(size);
  }
  // 1. 100, key의 길이 중 작은 수만큼 순회
  // 2. key의 각 캐릭터마다 해당하는 아스키 코드 구하기
  // 3. WEIRD_PRIME과 전체 array의 길이 사용해서 토탈에 더해줌
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 3;
    let length = this.keyMap.length;
    for(let i = 0; i < Math.min(100, key.length); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % length;
    }
    return total;
  }
  // 1. key와 _hash 함수 사용해서 인덱스 숫자 받아오기
  // 2. keyMap에 인덱스 존재하면 [key, value] 쌍 그냥 push
  // 3. 존재하지 않으면, 그 전에 새 배열 선언한 후 push
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }
  // 1. key와 _hash 함수 사용해서 인덱스 숫자 받아오기
  // 2. keyMap에 해당 index가 존재하면, 해당 인덱스에 저장된 seperate chaining 배열 길이만큼 순회
  // 3. 일치하는 key가 있으면 그 값을 반환
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
      }
    }
    return undefined;
  }
  // 1. 빈 배열 선언
  // 2. keyMap의 길이만큼 순회
  // 3. keyMap의 각 인덱스마다 seperateChaining 배열의 길이만큼 순회
  // 4. 배열에 key 값만 push
  keys() {
    let keyArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keyArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keyArr;
  }
  // 1. 빈 배열 선언
  // 2. keyMap의 길이만큼 순회
  // 3. keyMap의 각 인덱스마다 seperateChaining 배열의 길이만큼 순회
  // 4. 배열에 values 값만 push
  values() {
    let valueArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          valueArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valueArr;
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
})
