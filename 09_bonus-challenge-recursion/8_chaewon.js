// 객체 안의 모든 숫자를 문자열로 반환하는 재귀 함수를 구현한다. 중첩 객체를 포함하는 입력이 들어올 수 있다.

// 새로 알아야 하는 숫자를 문자열로 변환하는 방법: 숫자.toString() 사용
// (123).toString() -> "123"

function stringifyNumbers(obj)
{
    let res = {};

    for (let key in obj)
    {
        let val = obj[key];
        //console.log(val);
        //객체인지 확인하는 if문
        if (typeof val === 'object' && val !== null && !Array.isArray(val))
        {
            console.log("obj");
            res[key] = stringifyNumbers(val);
        }
        else if (typeof val === 'number') res[key] = val.toString();
        else res[key] = val;
    }

    return res;
}
//발생했던 문제 : 결과에 중첩 객체가 여러번 나온다!! 123, 23, 3 이런 식.. -> res에 'let'으로 선언하지 않아서 생긴 문제

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
// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }

console.log(stringifyNumbers(obj));