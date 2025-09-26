//배열의 첫 문자열을 대문자로 만드는 함수
//slice를 사용하지 않고 pop을 사용하는 방식으로 풀이
//~2 + pop한 것으로 return

function capitalizeFirst(arr)
{
    //배열의 마지막 원소인 경우(배열 길이 1) if문 처리
    if(arr.length === 1) return [arr[0].charAt(0).toUpperCase() + arr[0].slice(1)];

    return [arr[0].charAt(0).toUpperCase() + arr[0].slice(1)].concat(capitalizeFirst(arr.slice(1)));
} 


console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
console.log(capitalizeFirst(['car','t','banana'])); // ['Car','T','Banana']
console.log(capitalizeFirst(['car','','banana'])); // ['Car','','Banana']