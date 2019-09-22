const arr = [];
const permutationAll = (n) => {

    for (let i = 0; i < n.length; i++) {
        let str = '';
        const visit = {};
        for (let j = 0; j < n.length; j++) {
            visit[j] = false;
        }
        visit[i] = true;
        str += n[i];

        permutation(n,str,visit);
    }
}

const permutation = (n, str, visit) => {
    if(str.length === n.length) {
        arr.push(str);
    }
    
    for(let i = 0 ; i < n.length; i++){
        const invisit = Object.assign({}, visit);
        if(invisit[i]) continue;
        invisit[i] = true;
        permutation(n,str+n[i],invisit);
    }
}



process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");

    const m = n[n.length - 1].split('\n');
    n.pop();
    n.push(m[0]);
    m.shift();
    const num = m[1];

    permutationAll(n);

    arr.sort();
    console.log(arr[m-1]);


});