//피봇(첫번째 값)의 위치 지정해서 옮기기
//옮긴 뒤 정렬된 피봇 값의 왼쪽, 오른쪽에 대해 각각 quickSort 호출
//배열 길이가 1이면 return;

//재귀 호출로 최종적으로 완성된 arr 를 반환

function quickSort(arr, start = 0, end = arr.length - 1)
{
   
    if(end < start) return;

    let pivot = start;
    let changeIndex = start; //pivot 값이 최종 자리할 곳
    for(let i = start; i <= end; i++)
    {
        if(arr[pivot] > arr[i])
        {
            changeIndex++;
            [arr[i], arr[changeIndex]] = [arr[changeIndex], arr[i]]; //작은 값들을 앞으로 보낸다다
        }

    }

    [arr[changeIndex], arr[pivot]] = [arr[pivot], arr[changeIndex]]; //pivot 값 최종 위치랑 이동

    quickSort(arr, start, changeIndex - 1);
    quickSort(arr, changeIndex + 1, end);
    return arr;
}


console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3])); 
console.log(quickSort([1, 1, 3, 4, 9, 5, 4, 4, 3])); 