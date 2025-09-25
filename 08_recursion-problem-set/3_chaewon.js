// 배열 내 모든 숫자의 곱을 반환하는 재귀 함수 구현
//num을 arr.length로 초기화하고 num이 0이 되면 종료하는 식으로 res * arr[index - 1] 형태로 구현

function helper(arr)
{
    function productOfArray(index) {
        if(index < 0) return 1; // 배열의 끝에 도달하면 1 반환
        return arr[index] * productOfArray(index - 1);
    }
    
    return productOfArray(arr.length - 1);
}
//발생했던 문제 : helper 함수에서 return을 하지 않아서 undefined만 반환되었음

console.log(helper([1,2,3])) // 6
console.log(helper([1,2,3,10])) // 60

//헬퍼 함수를 사용하지 않는 다른 방법
function productOfArray2(arr)
{
    if(arr.length === 0) return 1;
    return arr[0] * productOfArray2(arr.splice(1))
}

console.log(productOfArray2([1,2,3])) // 6
console.log(productOfArray2([1,2,3,10])) // 60