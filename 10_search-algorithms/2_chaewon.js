// 이진 검색

function binarySearch(arr, target)
{
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while(left <= right)
    {
        mid = Math.floor((left + right) / 2)

        if(arr[mid] === target) return mid;
        
        if(target < arr[mid]) right = mid - 1;
        else left = mid + 1;
    }
    return -1;
}
//문제 : 없을 때의 종료 조건 설정 -> arr 범위 밖으로 나갔을 때도 종료
//문제 : left, right값이 target값인 경우? left<= right 등호 추가해서 해결
//문제 : mid값 연산 시 더하기 연산에 괄호하지 않아서 mid값이 제대로 계산되지 않는 문제 있었음

console.log(binarySearch([1,2,3,4,5],2)); // 1
console.log(binarySearch([1,2,3,4,5],3)); // 2
console.log(binarySearch([1,2,3,4,5],5)); // 4
console.log(binarySearch([1,2,3,4,5],6)); // -1
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)); // 2
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)); // 16
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)); // -1
