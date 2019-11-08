const solution = (cry) => {
    const arr = [];

    for(let i = 0; i < cry.length ; i++){
        arr.push(cry[i]);
    }
    
    let end = false;
    while(!end){
        end = true;
        let ex = arr[0];
        let cnt = 0;

        for(let i = 1; i < arr.length; i++){

            if(arr[i] === ex){
                cnt++;
                if(i === arr.length-1){
                    end = false;
                    arr.splice(i-cnt, cnt+1);
                }
            }else{
                ex = arr[i];
                if(cnt !== 0) {
                    end = false;
                    arr.splice(i-cnt-1, cnt+1);
                    i -= cnt;
                    cnt = 0;
                }
            }
        }
    }

    let answer = '';
    for(let i = 0; i < arr.length; i++){
        answer += arr[i];
    }
    return answer;
}


console.log(solution("browoanooooooommnaon"));
console.log(solution("browoanooooooomm"));
console.log(solution("bbrowoanooooooomm"));
console.log(solution("zyelleyz"));

