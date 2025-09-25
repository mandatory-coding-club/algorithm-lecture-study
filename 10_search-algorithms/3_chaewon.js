// 긴 문자열 안에 짧은 문자열이 몇 번 들어가는지 count 반환

function naiveSearch(long, short)
{
    let count = 0;
    let j = 0;
    let i = 0;
    for(let i = 0; i < long.length; i ++)
    {
        if(long[i] !== short[j]) continue;
        else
        {
            j++;
            if(j === short.length)
            {
                j = 0;
                count ++;
            }
        }
    }
    return count;
}

console.log(naiveSearch("roriefklolsisilol","lol")) // 2
console.log(naiveSearch("aaa111 aaa 111 aaa","aaa")) // 3