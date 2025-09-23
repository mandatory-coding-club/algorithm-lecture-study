//set의 원소 수를 묻는 질문
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    
    //탐색대 j와 j와 이전 숫자가 같은지 체크하는 i를 이용한 이중 포인터 풀이
    let res = 1;
    let i = 0;
    let j = 1;

    while(j < arr.length)
    {
        if(arr[i] === arr[j]) j++;
        else
        {
            i = j;
            j++;
            res++;
        }
    }
    return res;
}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4