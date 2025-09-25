// 객체를 받아 숫자인 모든 값을 문자열로 변환하는 재귀함수 작성
// 원본 객체 수정되면 안됨
// 객체를 순회하면서 value 타입별 처리
// 객체면 재귀 호출, 숫자면 문자열 변환, 나머지는 그대로 복사
function stringifyNumbers(obj) {
  let res = {};
  
  for(let key in obj) {
    // 배열과 null 의 경우에도 'object' 타입으로 인식되기 때문에 조건 체크에 추가!
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
        res[key] = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] === 'number') {
      res[key] = obj[key].toString();
    } else {
      res[key] = obj[key];
    }
  }
  
  return res;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj);
