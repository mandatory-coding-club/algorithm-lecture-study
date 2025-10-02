//선택 정렬 구현하기
function selectionSort(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        let min = arr[i];
        let idx = i;
        // 정렬된 부분인 앞부분을 제외하고 순회한다
        for(let j = i + 1; j < arr.length; j++)
        {
            if(min > arr[j])
            {
                min = arr[j];
                idx = j;
            }   
        }
        let temp = arr[idx];
        arr[idx] = arr[i];
        arr[i] = temp;
    }
    return arr;
} 


console.log(selectionSort([1, 2, 4, 5, 3]));
console.log(selectionSort([15, 67, 45, 434, 224, 12, -12]));