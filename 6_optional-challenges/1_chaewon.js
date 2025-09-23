// 문제 : 입력 문자열 2개의 숫자 빈도 수 동일한지 확인하기
// Time: O(N)

function sameFrequency(num1, num2) {
    //이전 문제와 다른 점 : 입력 값이 문자열이 아닌 숫자
    const num1Str = num1.toString();
    const num2Str = num2.toString();

    //num1의 빈도 수를 양수로 카운팅
    const freqCount = {};
    for(let i = 0; i < num1Str.length; i++) {
        freqCount[num1Str[i]] = (freqCount[num1Str[i]] || 0) + 1;
    }
    //num2의 빈도 수를 음수로 카운팅
    for(let i = 0; i < num2Str.length; i++) {
        if(!freqCount[num2Str[i]] || freqCount[num2Str[i]] === 0) return false;
        freqCount[num2Str[i]] = (freqCount[num2Str[i]] || 0) - 1;
    }
    return true;
}
//Time: O(2N) -> O(N)

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false
