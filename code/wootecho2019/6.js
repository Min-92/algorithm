const parseLog = (log) => {
    const [name, action, time] = log.split(' ');
    const h = parseInt(time.slice(0,2));
    const m = parseInt(time.slice(3,5));
    const s = parseInt(time.slice(-2));
    return [name, action, h,m,s];
}

const solution = (totalTicket, logs) => {
    const answer = [];
    let leftTicket = totalTicket;
    const idObj = {};

    prevTime = [[0,0,0]];
    for(let i = 0; i < logs.length ; i++){
        if(leftTicket <= 0) break;
        const [name, action, h, m, s] = parseLog(logs[i]);
        if(h <= 8) continue;
        if(h >= 10) break;
        if(m >= 59 && s >= 1) break;

        if(action === "request") {
            if(prevTime[prevTime.length-1][1] === m || (prevTime[prevTime.length-1][1]+1 === m && prevTime[prevTime.length-1][2] > s)){
                continue;
            }
            
            if(idObj[name]) continue;

            idObj[name] = true;
            prevTime.push([h,m,s]);
            answer.push(name);
            leftTicket--;
            continue;
        }

        if(action === 'leave'){
            idObj[name] = false;
            prevTime.pop();
            answer.pop();
            leftTicket++;
            continue;
        }


    }
    return answer.sort();
}

const totalTicket = 2000;
const logs = [
    "woni request 09:12:29",
    "brown request 09:23:11",
    "brown leave 09:23:44",
    "jason request 09:33:51",
    "jun request 09:33:56",
    "cu request 09:34:02",   
    "cu0 request 09:35:02",   
    "cu1 request 09:35:03",   
    "cu2 request 09:35:04",   
    "cu0 leave 09:35:06",   
    "as request 09:36:02",   
    "as request 09:37:02"   
]
// const logs = [
//     "woni request 09:12:29",
//     "brown request 09:23:11",
//     "brown leave 09:23:44",
//     "jason request 09:33:51",
//     "jun request 09:33:56",
//     "cu request 09:34:02"   
// ]

console.log(solution(totalTicket, logs));