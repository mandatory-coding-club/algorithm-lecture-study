// 모든 값이 평활화 된 배열을 반환하는 재귀 함수
// 원소의 값이 배열인지 int인지 확인하는 방법? -> Array.isArray(3)
// 흐름 -> 배열 1부터 순회화되 배열인 경우 계속 호출
// 완성된 배열은 어디에 저장? 한번에 저장할 방법이 없나? 일단은 헬퍼 함수 사용.

function flatten(arr)
{
    let res = [];
    function flatHelper(input) 
    {
        //console.log(input);
        if(input.length === 0) return;

        //배열이 아니면 바로 res에 추가
        if(!Array.isArray(input[0]))
        {
            res.push(input[0]);

            if(input.length === 1) return;
            else return flatHelper(input.slice(1));
        }
        //배열이라면 벗기기
        else
        {
            if(input.length === 1) return flatHelper(input[0])
            else return flatHelper(input[0].concat(input.slice(1)));
        }
    }
    flatHelper(arr);
    return res;
}
//발생했던 문제 : return을 안했음/res가 아닌 값을 return함
//발생했던 문제 : 배열 길이 1에 대한 예외처리 안했음
//발생했던 문제 : 배열을 (+) 연산으로 더하려 시도해서 중간에 문자열로 바뀜. concat 사용으로 변경하여 해결.

console.log(flatten([1, 2, 3, 4, 5])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]
