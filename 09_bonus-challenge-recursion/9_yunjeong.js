// 객체를 받아서 문자열에 해당하는 모든 값의 배열을 반환하는 재귀 함수 작성
// Solution
// key를 이용해 순회하면서 타입 구분
// string 타입인 경우 바로 push
// object 타입인 경우 재귀 호출 (배열 포함)
function collectStrings(obj) {
  let res = [];
  
  for (let key in obj) {
    let val = obj[key];
    if (typeof val === 'object' && val !== null) {
      // concat 함수는 원본 배열을 수정하는게 아니라 새 배열을 생성하기 때문에 res에 재할당 해줘야 함.
      res = res.concat(collectStrings(val));
    } else if (typeof val === 'string') {
      res.push(val);
    }
  }
  
  return res;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
