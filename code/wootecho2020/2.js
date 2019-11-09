const parse = (str) => {
    const [date, time]= str.split(" ");
    const h = +time.slice(0,2);
    const m = +time.slice(3,5);
    const s = +time.slice(-2);
    return [date,h,m,s]
}

function solution(logs) {
    let answer = [];
    for(let i = 0; i< 24; i++){
        answer[i] = 0;
    }
    const arr = logs.split('\n')

    for(let i = 0; i < arr.length; i++){
        const [date,h,m,s] = parse(arr[i]);
        let korH = h + 9;
        if(korH >= 24) korH -= 24;

        answer[korH]++;
    }

    return answer;
}



const a = `2019/05/01 00:59:19
2019/06/01 01:35:20
2019/08/01 02:01:22
2019/08/01 02:01:23
2019/08/02 03:02:35
2019/10/03 04:05:40
2019/10/04 06:23:10
2019/10/10 08:23:20
2019/10/12 08:42:24
2019/10/23 08:43:26
2019/11/14 08:43:29
2019/11/01 10:19:02
2019/12/01 11:23:10`

console.log(solution(a));