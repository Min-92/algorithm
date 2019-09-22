process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split("\n");
    const number = n.shift();
    const arr = n[0].split(' ');

    for(let i = 0 ; i < arr.length; i++){
        arr[i] = Number(arr[i]);
    }


    let count = 0;
    let noOne = true;
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 1){
            if(count === 0){
                noOne = false;
                continue;
            }else{
                if(noOne){
                    max = count;
                    count = 0;
                    noOne = false;
                    continue;
                }else{
                    max = Math.floor((count+1)/2);
                    count = 0;
                    noOne = false;
                    continue;
                }
            }
        }
        if(arr[i] === 0){
            count++;
            if(i === arr.length-1){
                max = count;
            }
        }
    }


    console.log(max);


});