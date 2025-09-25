// 피보나치 수열의 n번째 숫자 반환하기.
//0 1 1 2 3 5 8 

function fib(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fib(n-1) + fib(n-2);
}


console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465