function insertionSort(arr)
{
    //앞쪽은 정렬된 구간, 신규 정렬하기
    for(let i = 1; i < arr.length; i++)
    {
        let val = arr[i];
        //i 요소를 앞의 원소들과 비교해서 적절한 위치에 삽입한다
        for(let j = 0; j < i; j ++)
        {
            //비교 요소가 앞의 요소보다 크거나 같으면 : 적절
            if(arr[j] <= val)
            {
                console.log(arr);
            }
            //비교 요소가 앞의 요소보다 작다면 : 삽입
            else
            {
                arr.splice(i, 1);
                arr.splice(j, 0, val);
                console.log(arr);
                break;
            }
        }

    }
    return arr;
}

console.log(insertionSort([1, 2, 4, 5, 3]));
console.log(insertionSort([3, 5, 4, 7, 6, 2, 1]));