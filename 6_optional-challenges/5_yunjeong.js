// 주어진 정수 배열에서 num 길이를 가진 하위 배열의 최대 합 구하기
// Solution
// sliding window
// 고정 길이의 윈도우를 돌며 maxSum 계산
function maxSubarraySum(arr, num){
  if (arr.length < num) { return null; }
  let start = 0;
  let end = start + num - 1;
  let maxSum = 0;
  
  for(let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  
  let tempSum = maxSum;
  
  while(end < arr.length - 1) {
    tempSum = tempSum - arr[start] + arr[end + 1];
    maxSum = Math.max(tempSum, maxSum);
    start++;
    end++;
  }
  
  return maxSum;
}

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null
