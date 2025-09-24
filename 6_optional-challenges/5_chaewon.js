// 슬라이딩 윈도우 문제 : 정렬되지 않은 배열과 지정 숫자가 입력되었을 때, 배열에서 지정 숫자만큼 연달은 구간의 합 최대값 구하기
// 제약조건:
// Time Complexity - O(N)
// Space Complexity - O(1)

function maxSubarraySum(arr, num) {
    //배열 길이가 지정 숫자보다 작으면 null 반환
    if(arr.length < num) return null;

    //이전 문항과 같은 전략 사용 :
    //초기 합 구한 뒤, 창문을 한 칸씩 이동하며 합 갱신
    let maxSum = 0;
    for(let i = 0; i < num; i++)
    {
        maxSum += arr[i];
    }

    //창문을 한 칸씩 이동하며 합 갱신
    let tempSum = maxSum;
    for(i = 0, j = num; j < arr.length; i++, j++)
    {
        tempSum = tempSum - arr[i] + arr[j];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
//발생했던 문제 : tempsum을 갱신하지 않아서 maxsum을 대상으로 연산을 진행하는 문제.

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null
