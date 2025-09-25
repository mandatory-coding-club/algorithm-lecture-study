// 중첩된 객체를 포함할 수 있는 객체에서 모든 짝수의 합을 반환
// Solution
// 객체의 values만 가져와서 각 요소의 타입 구분
// 객체 타입이면 res += 재귀 호출
// 숫자 타입이면 짝수일 때만 res에 더해줌
function nestedEvenSum (obj) {
  let res = 0;
  let values = Object.values(obj);
  
  for (let val of values) {
    if (typeof val === 'object') {
      res += nestedEvenSum(val);
    } else if (typeof val === 'number' && val % 2 === 0) {
      res += val;
    }
  }
  
  return res;
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
