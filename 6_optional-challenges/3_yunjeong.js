// 정렬된 정수 배열과 목표 평균이 주어졌을 때, 배열에 쌍의 평균이 목표 평균과 같은 값의 쌍이 있는지 확인
// Solution
// multiple pointers 사용
// 정렬된 배열이기 때문에, 배열의 양 끝에서부터 시작
// 1. target 보다 작으면 left++
// 2. target 보다 크면 right--
function averagePair(arr, target){
  if (arr.length === 0) { return false; }
  let left = 0;
  let right = arr.length - 1;
  
  while(left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if(avg === target) {
      return true;
    } else if (avg > target) {
      right--;
    } else {
      left++;
    }
  }
  
  return false;
}

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false
