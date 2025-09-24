function sumZero(arr) {
    //양 끝에서 진행하는 포인터를 설정한다
    let left = 0;
    let right = arr.length - 1;

    //포인터가 교차하면 종료
    while(left < right)
    {
        let sum = arr[left] + arr[right];
        if(sum === 0) return [arr[left], arr[right]];
        else if (sum > 0) right--;
        else left++;
    }
    return undefined;
}

//콘솔 로그 윤정님 것에서 가져옴
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3,3]
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZero([1, 2, 3])) // undefined