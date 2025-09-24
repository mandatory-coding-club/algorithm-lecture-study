// 문자열을 받아 그 문자열의 역순인 문자열을 반환하는 재귀함수 작성
function reverse(str){
  if (str.length === 1) return str;
  return str.slice(-1).concat(reverse(str.slice(0, -1)));
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'
