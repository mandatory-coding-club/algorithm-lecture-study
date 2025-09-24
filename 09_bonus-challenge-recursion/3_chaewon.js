
// 배열과 콜백을 받는 재귀 함수. 배열 중 1개라도 조건을 만족하면 true값을 반환한다.
// arr를 순회하는 식으로 재귀를 호출하면 될 것 같다
// 


function someRecursive(arr, condition)
{
    if(arr.length === 0) return false;
    if(condition(arr[0]))
    {
        return true;
    }
    else
    {
        return someRecursive(arr.slice(1), condition);
    }
}

//화살표 함수
const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([1,6,8,10], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)) // false