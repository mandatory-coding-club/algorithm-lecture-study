// 1 1 2 3 5 8...

//일반 재귀
function fiboRecur(n)
{
    if(n < 0) return 0;
    if(n < 1) return 1;
    return fiboRecur(n - 2) + fiboRecur(n - 1);

}


//재귀와 저장
function fiboMemo(n, memo = [])
{
    if(memo[n]) return memo[n];
    if(n < 0) return 0;
    if(n < 1) return 1;
    
    let res = fiboMemo(n - 1, memo) + fiboMemo(n - 2, memo);
    memo[n] = res;
    return res;
}

//상향식, 루프와 테이블 사용
function fiboTable(n)
{
    let table = [1, 1, 2];
    for(let i = 3; i <= n; i++)
    {
        table[i] = table[i - 1] + table[i - 2];
    }
    return table[n];
}

console.log(fiboRecur(4)); //5
console.log(fiboMemo(6)) //13
console.log(fiboTable(5)); //8