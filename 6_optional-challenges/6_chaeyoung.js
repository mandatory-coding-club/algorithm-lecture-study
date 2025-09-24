// 6. Sliding Window - minSubArrayLen
// 양수 배열과 양수라는 두 개의 매개 변수를 받아들이는 minSubArrayLen이라는 함수를 작성하세요.

// 이 함수는 합이 함수에 전달된 정수보다 크거나 같은 인접한 하위 배열의 최소 길이를 반환해야 합니다. 값이 없는 경우 0을 반환합니다.

// 예시:

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
// Time Complexity - O(n)

// Space Complexity - O(1)

//solution
// 1.sum = arr[i]+arr[i+1] 계산
// 2.sum이 target보다 작으면 for 문 sum + arr[i] 증가
// 3. sum이 target보다 같거나 크면 초기 i 증가 후 1번 반복

function minSubArrayLen(nums, target) {
  let minLen = Infinity;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
