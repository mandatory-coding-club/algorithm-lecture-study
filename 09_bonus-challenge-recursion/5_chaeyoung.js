// 5. capitalizeFirst
// capitalizeFirst라는 재귀 함수를 작성하시오.

// 문자열 배열이 주어지면 배열에 있는 각 문자열의 첫 글자를 대문자로 바꿔주는 함수입니다.

// SAMPLE INPUT / OUTPUT
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

//solution
// 1. 배열 하나씩 꺼내옴.
// 2. 꺼내온 문자열의 첫 글자를 대문자로 바꿈 + 나머지 문자열
// 3. 배열에 추가.
// 4. 배열을 반환.

function capitalizeFirst1(arr) {
  let newArr = [];

  function helper(input) {
    if (input.length === 0) return;
    let capitalized = input[0][0].toUpperCase() + input[0].slice(1);
    newArr.push(capitalized);

    helper(input.slice(1));
  }

  helper(arr);

  return newArr;
}

//앞에서부터 착착 변환해서 넣어주기만 하면 되니까 스프레드 문법 사용하면 더 간단하지 않을까?

function capitalizeFirst2(arr) {
  if (arr.length === 0) return [];
  let capitalized = arr[0][0].toUpperCase() + arr[0].slice(1);

  return [capitalized, ...capitalizeFirst2(arr.slice(1))];
}

// 처음에 if (arr.length === 0) return ;해서 undefinde가 반횐돼서 오류남..
// 구래서 [] 빈배열 반환해줘야함. 스프레드에서 []는 빈배열이라 펼칠요소가 없으므로 아무것도 추가 안됨!.!

console.log(capitalizeFirst1(["car", "taco", "banana"])); // ['Car','Taco','Banana']
console.log(capitalizeFirst2(["car", "taco", "banana"])); // ['Car','Taco','Banana']
