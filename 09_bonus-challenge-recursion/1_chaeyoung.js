// 1. reverse
// 문자열을 받아들이고 그 문자열의 역순인 문자열을 반환하는 reverse 함수를 작성합니다.

// solution
// slice 메서드 활용.
// str.slice(1)하면 재귀함수 안에서 str이 앞에서 부터 하나씩 줄어듬
// 그러면 str[0]을 뒤에 쌓이도록 더해주면 됨
//                   reverse(awesome) + a
//                reverse(wesome) + w + a
//             reverse(esome) + e + w + a
//          reverse(some) + s + e + w + a
//       reverse(ome) + o + s + e + w + a
//    reverse(me) + m + o + s + e + w + a
// reverse(e) + e + m + o + s + e + w + a

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(111, reverse("awesome")); // emosewa
console.log(reverse("rithmschool")); // loohcsmhtir
