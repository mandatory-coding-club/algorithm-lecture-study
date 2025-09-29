// 배열 내 단어를 모두 대문자로 변경해 반환

function capitalizeWords(arr)
{
    if(arr.length === 0) return [];
    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

console.log(capitalizeWords(['t', 'banana', 'cake'])); //[ 'T', 'BANANA', 'CAKE' ]