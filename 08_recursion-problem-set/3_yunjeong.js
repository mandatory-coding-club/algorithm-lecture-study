// 숫자 배열을 받아 모든 숫자의 곱을 반환하는 함수를 재귀를 이용해 작성
// Solution
// 재귀 호출 시마다 배열의 첫 번재 요소와 나머지 배열의 곱
function productOfArray(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * productOfArray(nums.slice(1));
}


console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60
