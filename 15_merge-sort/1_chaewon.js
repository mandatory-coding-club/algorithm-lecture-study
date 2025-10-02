// 합병 정렬 구현하기

function merge(arr1, arr2)
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
    }
    if(i === arr1.length) res.push(...arr2.slice(j));
    else res.push(...arr1.slice(i));

    return res;
}

function mergeSort(arr)
{
    //반을 쪼개서 병합. 종료 조건이 함수의 시작점이라고 생각하자!
    if(arr.length <= 1) return arr; 

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid))
    //console.log(left, right);

    return merge(left, right);
}

console.log(mergeSort([1, 4, 2, 5, -1, 0, 9, 7, 8, 10]));
console.log(mergeSort([15, 67, 45, 434, 224, 12, -12]));