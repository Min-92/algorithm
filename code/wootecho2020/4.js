const inputUserData = (userData, infos) => {
    for(let i = 0; i < infos.length ; i++){
        const [id, pw] = infos[i].split(" ");
        userData[id] = pw;
    }
}

const parseAction = (action) => {
    return action.split(" ");
}

function solution(infos, actions) {
    const userData = {};
    inputUserData(userData, infos);

    let curUser = undefined;
    let added = false;
    const answer = [];
    for(let i = 0; i < actions.length; i++){
        const [action, ex1, ex2] = parseAction(actions[i])
        if(action === "ADD"){
            if(ex2 || (ex1+1) === NaN) {
                answer.push(false);
                continue;
            }

            if(curUser){
                answer.push(true);
                added = true;
                continue;
            }
            answer.push(false);
            continue;
        }else if (action === "LOGIN"){
            if(curUser) {
                answer.push(false);
                continue;
            }
            if(userData[ex1]){
                if(userData[ex1] === ex2){
                    answer.push(true);
                    curUser = ex1;
                    continue;
                }
            }
            answer.push(false);
            continue;
        }else if(action === "ORDER") {
            if(!curUser) {
                answer.push(false);
                continue;
            }

            if(added){
                added = false;
                answer.push(true);
                continue;
            }
            answer.push(false);
            continue;
        }
        answer.push(false);
        continue;

    }

    return answer;
}

const infos = ["kim password", "lee abc"];
const actions = [
    "ADD 30", 
    "LOGIN kim abc", 
    "LOGIN lee password", 
    "LOGIN kim password", 
    "LOGIN kim password", 
    "ADD 30", 
    "ORDER",
    "ORDER",
    "ADD 40",
    "ADD 50"
];

const infos1 = ["kim password", "lee abc"]
const actions1 = [
    "LOGIN lee abc", 
    "LOGIN kim password"
]

console.log(solution(infos, actions));
console.log(solution(infos1, actions1));