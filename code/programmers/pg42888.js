function solution(record) {
    let action, id, name;
    let str;
    const userList = {};
    const actionList = [];
    for (let i = 0; i < record.length; i++) {
        str = record[i].split(' ');
        action = str[0];
        id = str[1];
        
        if(str[2]) {
            name = str[2];
            userList[id] = name;
        }
        
        if(action !== "Change"){
            actionList.push([action, id]);
        }
    }

    const actionObj = {
        Enter : "님이 들어왔습니다.",
        Leave : "님이 나갔습니다."
    }
    const answer = [];
    for(let i = 0; i < actionList.length; i++){
        answer.push(`${userList[actionList[i][1]]}${actionObj[actionList[i][0]]}`)
    }
    
    
    return answer;
}


const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];

console.log(solution(record));