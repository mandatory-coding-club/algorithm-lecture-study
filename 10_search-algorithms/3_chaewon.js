// 긴 문자열 안에 짧은 문자열이 몇 번 들어가는지 count 반환

function naiveSearch(long, short)
{
    let count = 0;
    let i = 0;
    for(let i = 0; i < long.length; i ++)
    {
        for(let j = 0; j < short.length; j++)
        {
            if(long[i + j] !== short[j]) break;
            if(j === short.length - 1) count++;
        }
    }
    return count;
}
//오답 : ababa aba 같은 경우를 생각하지 않음. i가 계속 증가하게 했음. 각 글자마다 시작점으로 두고 확인했어야 함!

console.log(naiveSearch("roriefklolsisilol","lol")) // 2
console.log(naiveSearch("aaa111 aaa 111 aaa","aaa")) // 3
console.log(naiveSearch("ababab","aba")) // 2