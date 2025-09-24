// 문제 : 두번째 문자열이 첫번째 문자열의 순서를 그대로 포함하는지 확인한다. (사이에 다른 문자가 있어도 됨)
// 제약 조건
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2) {
    let i = 0;
    for(j = 0; j < str2.length; j++)
    {
        if(str1[i] === str2[j])
            {
                i++;
                if(i === str1.length) return true;
            }
    }
    return false;
}
//시간 복잡도 : O(M) (순회 횟수가 M만큼 발생)

console.log(isSubsequence('hello', 'hellx worlo')); // true
console.log(isSubsequence('sing', 'stttting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)