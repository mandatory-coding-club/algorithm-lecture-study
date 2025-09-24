//문제 : 정렬된 배열 중 평균이 목표 평균과 같은 값의 쌍이 있는지 확인

// 보너스 제약조건:
// Time: O(N)
// Space: O(1)

function averagePair(arr, target) {
    //다중 포인터 사용
    //합해서 0이 되는 쌍 찾을 때와 같은 요령으로 양 끝에서부터 포인터
    let left = 0;
    let right = arr.length - 1;
    while(left < right)
    {
        let avg = (arr[left] + arr[right]) / 2;
        if(avg === target) return true;
        else if(avg < target) left++;
        else right--;
    }
    return false;
}

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false