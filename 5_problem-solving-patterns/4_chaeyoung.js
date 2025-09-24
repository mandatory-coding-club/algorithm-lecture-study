// 4.
// SLIDING WINDOW
// This pattern involves creating a window which can either be an array or number from one position to another

// Depending on a certain condition, the window either increases or closes (and a new window is created)

// Very useful for keeping track of a subset of data in an array/string etc.

// An Example
// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

// SOLUTION
// 목표 : 배열에서 n개의 연속된 요소의 합 중 가장 큰 값을 찾는 것
// 1. 한칸씩 옆으로 이동하여 합을 구한다.
// 2. 나올 수 있는 합 갯수 (전체 배열 갯수 - n +1) 만큼 반복문 돌린다.
// 3. 이때 현재 합과 최대합을 비교하여 최대합을 갱신한다.

function maxSubarraySum(arr, n) {
  if (n > arr.length) return null;
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  let tempSum = maxSum;
  for (let i = 0; i < arr.length - n; i++) {
    tempSum = tempSum - arr[i] + arr[i + n];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

