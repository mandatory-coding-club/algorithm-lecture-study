// 버블 정렬 구현하기
function bubbleSort(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = 0; j < arr.length - i - 1; j++)
        {
            if(arr[j] <= arr[j + 1]) continue;
            else
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}



console.log(bubbleSort([1, 2, 4, 5, 3]));
console.log(bubbleSort([15, 67, 45, 434, 224, 12, -12]));