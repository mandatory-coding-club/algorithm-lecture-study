//슬라이딩 윈도우 문제 : 배열의 연속된 부분 배열의 합이 target보다 크거나 같은 최소 길이 구하기
// 제약 조건 :
// Time Complexity - O(n)
// Space Complexity - O(1)

function minSubArrayLen(arr, target) {
    //초기값 설정 최대
    let minLength = Infinity;

    let sum = arr[0];
    let i = 0;
    let j = 0;

    //target을 넘을 때까지 j 증가, 넘으면 i 증가 반복
    while(i < arr.length - 1 && j < arr.length)
    {
        if(sum < target)
        {
            j++;
            sum += arr[j];
        }
        else if(sum >= target)
        {
            minLength = Math.min(minLength, j - i + 1);
            sum -= arr[i];
            i++;
        }
    }
    return minLength === Infinity ? 0 : minLength;
}
//발생했던 문제 : j 종료조건 미설정으로 j값이 배열 길이를 넘어서는 문제가 있었음

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0
