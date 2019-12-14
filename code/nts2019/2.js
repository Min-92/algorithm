function solution(n) {
    const str = String(n);

    let answer = 0;
    const obj = {};

    for(let i = 0; i < str.length; i++){
        obj[str[i]] = true;
    }

    for(const key in obj){
        if(key === "0") continue;
        if(n%parseInt(key) === 0) answer++;
    }


    return answer;
}


console.log(solution(2322));