// 3.다중 포인터 - averagePair
// averagePair라는 함수를 작성합니다. 정렬된 정수 배열과 목표 평균이 주어졌을 때, 배열에 쌍의 평균이 목표 평균과 같은 값의 쌍이 있는지 확인합니다. 목표 평균과 일치하는 쌍이 두 개 이상 있을 수 있습니다.

// 보너스 제약조건:

// Time: O(N)

// Space: O(1)

// 예시 인풋:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

// Solution
// 양쪽 끝 부터 비교
//     1-1. 목표평균 보다 작으면 왼쪽 포인터 증가
//     1-2. 목표평균 보다 크면 오른쪽 포인터 감소

function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const average = (arr[left] + arr[right]) / 2;
    if (average === target) return true;
    else if (average < target) left++;
    else right--;
  }
  return false;
}
