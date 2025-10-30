//Separate Chaining 방식으로 충돌해결한 해시테이블 만들어보기
//set, get, keys, values 매서드 구현하기

class HashTable
{
    constructor(size)
    {
        this.keyMap = new Array(size);
    }

    _hash(key)
    {
        let total= 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i ++)
        {
            let value = key.charCodeAt(i) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value)
    {
        let idx = this._hash(key);
        if(!this.keyMap[idx]) this.keyMap[idx] = [];
        this.keyMap[idx].push([key, value]);
    }
    get(key)
    {
        let idx = this._hash(key);
        if(this.keyMap[idx])
        {
            for(let i = 0; i < this.keyMap[idx].length; i++)
                {
                    //해당 키 값이 존재하면 value return
                    if(this.keyMap[idx][i][0] === key)
                    {
                        return this.keyMap[idx][i][1];
                    }
                }
        }
        return undefined;
    }
    keys()
    {
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++)
        {
            if(this.keyMap[i])
            {
                for(let j = 0; j < this.keyMap[i].length; j ++)
                {
                    keysArr.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keysArr;
    }
    values()
    {
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++)
        {
            if(this.keyMap[i])
            {
                for(let j = 0; j < this.keyMap[i].length; j ++)
                {
                    valuesArr.push(this.keyMap[i][j][1]);
                }
            }
        }
        return valuesArr;
    }

}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")


ht.keys().forEach(function(key){
  console.log(ht.get(key));
})