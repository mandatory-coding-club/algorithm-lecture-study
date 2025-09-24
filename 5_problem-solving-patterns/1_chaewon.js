function same(arr1, arr2) {
    //배열의 길이가 같은지 비교
    if(arr1.length !== arr2.length)
    {
        return false;
    }

    //각 배열의 빈도 수 센 객체 만들기
    const freqCount1 = {};
    const freqCount2 = {};

    for(let i = 0; i < arr1.length; i++)
    {
        freqCount1[arr1[i]] = (freqCount1[arr1[i]] || 0) + 1;
        freqCount2[arr2[i]] = (freqCount2[arr2[i]] || 0) + 1;
    }

    //객체 내 value값 비교
    //if : 없거나 숫자가 다르면 false
    //else : true

   for (let key in freqCount1)
   {
    if(!(key ** 2 in freqCount2))
    {
        return false;
    }
    if(freqCount2[key ** 2] !== freqCount1[key])
    {
        return false;
    }
   }
   return true;
}

console.log(same([1,2,3], [4,1,9])); // true
console.log(same([1,2,3], [1,9])); // false
console.log(same([1,2,1], [4,4,1])); // false (must be same frequency)