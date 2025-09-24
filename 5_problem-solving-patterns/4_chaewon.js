//배열과 int값을 받아서
//배열의 int값만큼 연속된 요소의 합 중 최대값을 반환하는 함수

function maxSubarraySum(arr, width) {
    //추가되는 값과 없어지는 값을 비교해서 구한다.
    
    //예외 조건 바로 종료
    if(arr.length < width) return null;

    // 첫 번째 윈도우의 합 계산
    let maxSum = 0;
    for(let i = 0; i < width; i++) {
        maxSum += arr[i];
    }

    //순회
    let tempSum = maxSum;
    for(let i = width; i < arr.length; i++)
    {
        tempSum = tempSum - arr[i - width] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) // 17
console.log(maxSubarraySum([4,2,1,6],1)) // 6
console.log(maxSubarraySum([4,2,1,6,2],4)) // 13
console.log(maxSubarraySum([],4)) // null
