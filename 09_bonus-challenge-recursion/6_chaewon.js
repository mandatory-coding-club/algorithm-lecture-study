// 입력으로 객체(중첩 개체를 포함할 수 있음)을 받아 모든 짝수의 합을 반환한다.
// val에는 객체나 숫자, 다른 자료형을 가진 것들도 들어오기 때문에 객체인지 한 번 체크한 뒤 짝수인지 확인해야 한다!

// 객체 내 val를 순회하는 함수 사용하고, 객체인지 확인하는 함수를 사용해야 함.
function nestedEvenSum(obj)
{
    let sum = 0;

    for (let key in obj)
    {
      let val = obj[key];
      //console.log(val);
      //객체인지 확인하는 if문
      if (typeof val === 'object' && val !== null && !Array.isArray(val))
      {
        sum += nestedEvenSum(val);
      }
      if (typeof val === 'number' && val % 2 === 0)
      {
        sum += val;
      }
    }   

    return sum;
}
//발생했던 문제 : key를 순회하면서 더하려고 함
//val의 type을 number로 확인해야 하는데 int로 확인해서 먹통

//인풋 값 정의
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
      testEmpty: ""
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