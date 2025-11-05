class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  // key(문자열) -> index(숫자)로 변환
  // key 한글자씩 돌면서 UTF-16 코드 유닛 값으로 변환 (소문자 알파벳: 97 ~ 122) -> 간단히 하기위헤 96 빼줌
  // 최대한 index의 중복을 막기위해 소수(31)을 곱해줌
  // 배열 사이즈내의 index값을 반환해야하므로 배열길이만큼 나눈 나머지를 구함
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

  // 데이터 저장
  // 중복되는 index에 배열로 저장
  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  // 데이터 조회
  // 같은 index에 여러 키가 있을 수도 있으니 for로 확인
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

  // 모든 키 값 반환
  // 중복 확인해서 한번씩만 push
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

ht.keys().forEach(function (key) {
  console.log(ht.get(key));
}); // #DDA0DD
// #FA8072
// #DDA0DD
// #DDA0DD
// #800000
// #FFFF00
// #808000
// #F08080
// #C71585
