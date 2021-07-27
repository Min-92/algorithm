function getBusTimeTable(n, t, m) {
    const timeTable = [];
    let busHour = 9;
    let busMin = 0;

    for (let i = 0; i < n; i++) {
        timeTable.push([changeToTime([busHour, busMin]), m]);
        busMin += t;
        while (busMin >= 60) {
            busMin -= 60;
            busHour++;
        }
    }
    return timeTable;
}

function changeToTime(arr) {
    let hour = arr[0].toString();
    let min = arr[1].toString();
    if (hour.length === 1) hour = "0" + hour;
    if (min.length === 1) min = "0" + min;

    return `${hour}:${min}`;
}

function solution(n, t, m, timetable) {
    timetable.sort();

    // const timeTableArr = changeToArr(timetable);
    const busTime = getBusTimeTable(n, t, m);

    let numF = n * m;
    let numC = timetable.length;

    const queue = [];

    let lastBusTime;
    let lastPersonTime = "23:59";
    let space = false;
    while (busTime.length) {
        if (timetable[0] <= busTime[0][0]) {
            queue.push(timetable[0]);
            timetable.shift();
        } else {
            for (let i = 0; i < busTime[0][1]; i++) {
                if (queue.length) {
                    lastPersonTime = queue.shift();
                }else{
                    if(busTime.length === 1){
                        space = true;
                    }
                }
            }
            lastBusTime = busTime[0][0];
            busTime.shift();
        }
    }


    const la = lala(lastPersonTime);
    
    if(space){
        return lastBusTime;
    }else{
        return la;
    }


    var answer = '';
    return answer;
}

function lala(time){
    let hour = parseInt(time[0]+time[1]);
    let min = parseInt(time[3]+time[4]);

    min--;
    if( min < 0){
        min = 59;
        hour--;
    }
    hour = `${hour}`;
    min = `${min}`;
    if(hour.length === 1){
        hour = '0'+hour;
    }
    if(min.length === 1){
        min = '0'+min;
    }
    return hour+':'+min;
}


// console.log(solution(10, 60, 45, ['23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59']))
console.log(solution(2, 10, 2, ['09:10', '09:09', '08:00']))

// console.log(changeToTime([10,9]))