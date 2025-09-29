// 문자열이 팔린드롬(좌우대칭)인지 확인하는 재귀 함수를 작성한다.

// 생각나는 해결법 : 다중 포인터로 비교
// 재귀로 구현하기 : 다음 재귀마다 splice로 [1, length - 1] 의 배열 생성하기?
// -> 한 번이라도 false면 최종적으로 false를 반환해야 함. 재귀 안에서 어떻게?

// 재귀로 구현하기 : 다른 방법?

function isPalindrome(str)
{
    let len = str.length
    if(len <= 1) return true; //끝 문자가 일치할 때마다 깎아서 길이 1 이하로 진입했다면 true 반환.

    //끝 문자가 일치하면 substring으로 재귀
    if(str[0] === str[len-1])
        {
            return isPalindrome(str.substring(1, len-1));
        }
    //끝 문자가 일치하지 않으면 false
    return false
}
//subtring에는 마이너스 인덱스 안됨

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false