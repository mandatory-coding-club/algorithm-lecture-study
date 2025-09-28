//객체를 입력으로 받아 모든 문자열을 모은 배열을 반환한다.

function collectStrings(obj)
{
    let res = [];

    for(let key in obj)
    {
        let val = obj[key];
        //console.log(val);
        if(typeof val === 'object' && val !== null && !Array.isArray(val)) res = res.concat(collectStrings(val));
        if(typeof val === 'string') res.push(val);
    }
    return res;
}
//발생했던 문제 : val이 객체인 경우 res.concat으로 결과값을 늘려서 할당해줘야 했음! 동일하게 push하면 안됨.

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])