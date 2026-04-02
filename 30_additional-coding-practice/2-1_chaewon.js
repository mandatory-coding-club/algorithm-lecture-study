//==========문제=========
//분할 정복
// 1과 0으로 구성된 배열에 모든 1이 먼저 나오고 모든 0이 그 뒤에 이어지는 배열이 주어졌을 때, 배열에 있는 0의 개수를 반환하는 countZeroes라는 함수를 작성하세요.
// 요구 시간 복잡도 : O(log n) (이진 검색)
// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0


//==========내 생각=========
//예외 경우 : 
    //배열 길이가 0이면 바로 종료
    //배열 길이를 구한다
    //첫번째 숫자가 0인지, 마지막 숫자가 0인지 체크하고 이 경우 배열 길이만큼 알아서 반환
//일반 경우 :
    //이진 탐색으로 처리한다
    //이진 탐색은 target값을 찾는데, 첫번째 0 값은 어떻게 찾을 수 있을까여?
    //그러게?

    //첫 시행에 중간값 찾기 : 1이라면 오른쪽 반을 탐색 0이면 왼쪽 반을 탐색
    //이후 중간값 찾기 : 1이라면 오른쪽 반을 탐색 0이면 왼쪽 반을 탐색 ... 반복 

    //그래서 첫번째 0값은 언제 알 수 있나여?
//==========코드=========
function countZeroes(arr)
{
    if(arr.length === 0) return 0;
    const len = arr.length;

    if(arr[0] === 0) return len;
    if(arr[len - 1] === 1) return 0;

    //이진 탐색으로 처리한다. (첫 0의 인덱스 = left가 수렴하는 위치)
    return binarySearch(arr);
}

function binarySearch(arr)
{
    const len = arr.length;
    let left = 1;
    let right = len - 1;
    let mid;

    while (left < right)
    {
        mid = Math.floor((left + right) / 2);

        if (arr[mid] === 0)
        {
            right = mid; // 첫 0은 mid 이하
        }
        else
        {
            left = mid + 1; // 첫 0은 mid 오른쪽
        }
    }
    return len - left;
}

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
console.log(countZeroes([1, 0])); // 1