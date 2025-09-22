function validAnagram(str1, str2) {
    //두 str의 길이 비교
    if(str1.length !== str2.length) return false;

    //str1의 빈도 카운팅 증가
    const freqCount = {};
    for(let i = 0; i < str1.length; i++)
    {
        freqCount[str1[i]] = (freqCount[str1[i]] || 0) + 1;
    }
    //str2를 순회하면서 빈도 카운팅 감소
    for(let i = 0; i < str2.length; i++)
    {
        //없거나 0인 값이라면? false 반환
        if(!freqCount[str2[i]]) return false;
        freqCount[str2[i]]--;
    }
    return true;
}

//코멘트 : 1번 문제랑 동일 방식으로 풀어도 무방한 것으로 보임
//코멘트 : 없는 경우를 고려하지 않아서 rat / car에서 오답 발생했었음.

//TFTFFTT
console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true