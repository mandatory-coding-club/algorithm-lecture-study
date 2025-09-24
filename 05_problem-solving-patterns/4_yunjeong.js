// SLIDING WINDOW
function maxSubarraySum(arr, n) {
  if (n > arr.length) { return null; }
  let sum = 0;
  let temp = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  temp = sum;
  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i];
    sum = Math.max(temp, sum);
  }

  return sum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) // 17
console.log(maxSubarraySum([4,2,1,6],1)) // 6
console.log(maxSubarraySum([4,2,1,6,2],4)) // 13
console.log(maxSubarraySum([],4)) // null
