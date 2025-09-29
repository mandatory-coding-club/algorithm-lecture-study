// 합병 정렬 구현하기

function mergeSort(arr1, arr2)
{
    let res = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length)
    {
        if(arr1[i] <= arr2[j])
        {
            res.push(arr1[i]);
            i++;
        }
        else
        {
            res.push(arr2[j]);
            j++;
        }
        console.log(res);
    }
    if(i === arr1.length) res.push(...arr2.slice(j));
    else res.push(...arr1.slice(i));

    return res;
}

function mergeSort(arr)
{
    if(arr.length >= 2) return; //반을 쪼개서 병합한다
}

console.log(mergeSort([1, 2, 4, 5], [-1, 0, 3, 8, 9, 10]));
//console.log(mergeSort([15, 67, 45, 434, 224, 12, -12]));