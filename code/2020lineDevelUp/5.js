let count = 0;
let time = 0;

const bfs = (target, current, n, map) => {
    if(current[0] > map[0] || current[1] > map[1]){
        return;
    }

    if(target[0] === current[0] && target[1] === current[1]){
        count++;
        time = n;
        return;
    }

    bfs(target, [current[0]+1,current[1]], n+1, map);
    bfs(target, [current[0],current[1]+1], n+1, map);
}

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split("\n");
    const a = n[0].split(' ');
    const b = n[1].split(' ');
    
    for(let i = 0; i < 2; i++){
        a[i] = Number(a[i]);
        b[i] = Number(b[i]);
        
        if(b[i] > a[i]) return console.log('fail');
    }
    if(b[0] === 0 && b[1] === 0){
        console.log(0);
        console.log(1);
        return;
    }

    bfs(b,[0,0],0,a);

    console.log(time);
    console.log(count);
});