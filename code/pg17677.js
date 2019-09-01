function makeKeys(str) {

    const reg = /[A-Za-z][A-Za-z]/g;


    const result = [];
    let st = '';
    let re = '';
    for (let i = 0; i < str.length - 1; i++) {
        st = str[i] + str[i + 1];
        re = st.match(reg);
        if (re) {
            result.push(re[0]);
        }
    }
    return result;
}

function makeObj(key) {
    const obj = {};

    for (let i = 0; i < key.length; i++) {
        let str = key[i];
        let plus = "+";
        while (obj[str]) {
            str = str + plus
        }
        obj[str] = 1;
    }
    return obj;
}

function solution(str1, str2) {
    const st1 = str1.toLowerCase();
    const st2 = str2.toLowerCase();

    const key1 = makeKeys(st1);
    const key2 = makeKeys(st2);
    if(key1.length === 0 && key2.length === 0){
        return 65536
    }else if (key1.length === 0 || key2.length === 0 ){
        return 0;
    }
    const obj1 = makeObj(key1);
    const obj2 = makeObj(key2);

    const union = {};

    let a = 0;
    let b = 0;

    for (let val in obj1) {
        union[val] = 1;
        b++;
    }

    for (let val in obj2) {
        if (union[val]) {
            union[val]++;
            a++;
        } else {
            union[val] = 1;
            b++;
        }
    }

    if(a === 0) return 0;
    if(b === 0) return 65536;
    const answer = a/b*65536;
    return Math.floor(answer);
}

// solution('FRANCE', 'french' )
// console.log(solution('aa1+aa2', 'AAAA12'))
console.log(solution('E=M*C^2', 'e=m*c^2'))

