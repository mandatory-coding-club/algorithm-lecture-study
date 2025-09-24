//슬라이딩 윈도우 문제 : unique한 문자로 이루어진 문자열의 최대 길이 구하기 (hello -> 3)
// Time Complexity - O(n)

function findLongestSubstring(str) {
    //빈도 카운팅과 다중 포인터 패턴 사용

    let freqCount = {};
    let maxLength = 0;
    let i = 0;
    let j = 0;

    while(i < str.length - 1 && j < str.length)
    {
        //빈도에 저장되어 있다면 -> i 전진
        if(freqCount[str[j]])
        {
            freqCount[str[i]]--;
            i++;

        }
        //빈도에 저장되어 있지 않다면 -> j 전진
        else
        {
            freqCount[str[j]] = (freqCount[str[j]] || 0) + 1;
            j++;
        }
        maxLength = Math.max(maxLength, j - i);
    }
    return maxLength;
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6
