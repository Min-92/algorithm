process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const m = n[1].split('\n');
    const a = Number(n[0])
    
    const [b, ...message] = m;

    if(message.length === 1){
        console.log(message);
        return;
    }
    
    const time = [];
    for(let i =0; i < b; i++){
        time.push(message.shift());
    }

    let ti = 0;
    let isWorking  = true;
    while(isWorking){
        let zeroCount = 0;
        for(let i = 0 ; i < time.length; i++){
            time[i]--;
            if(time[i] <= 0) {
                zeroCount++;
                if(message.length){
                    time[i] = message.shift();
                }
                if(zeroCount === time.length){
                    isWorking = false;
                }
            }
        }
        
        
        ti ++;
    }

    console.log(ti);

});