process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split("\n");
    const a = n.shift();

    const time = [];
    for (let i = 0; i < n.length; i++) {
        time.push(n[i].split(' '))
    }

    let end = 0;
    for(let i = 0; i < time.length; i++){
        end = Math.max(time[i][0],end);
        end = Math.max(time[i][1],end);
    }

    let isWorking = true;
    let ti = 0;
    let count = 0;
    let max = 1;
    while (isWorking) {
        for (let i = 0; i < time.length; i++) {
            if (Number(time[i][0]) === ti) {
                count++;
                max = Math.max(count, max);
            }

            if (Number(time[i][1]) === ti) {
                count--;
            }
        }
        ti++;
        if(ti >= end) isWorking = false;
    }


    console.log(max);

});