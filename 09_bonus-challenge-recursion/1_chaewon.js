// 문자열의 역순 문자열 출력하기

// 생각나는 방법1 : 마지막 문자부터 for문 순회하며 역순으로 출력하기
// 생각나는 방법2 : reverse 함수 쓰기
// 생각나는 방법3 : 앞과 뒤에서부터 시작되는 포인터로 서로 뒤바꾸기
// 재귀로 풀기 : ??

function reverse(str)
{
    //종료 조건
    if(str === "") return "";

    return reverse(str.substring(1)) + str.charAt(0)
}
//전혀 모르겠어서 구글링좀 했습니다.

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'
console.log(reverse('')) // ''