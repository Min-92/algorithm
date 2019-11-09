function solution(forms) {
    const keys = {}
    const answer = {};
    for(let i = 0; i < forms.length ; i++){
        for(let j = 0; j < forms[i][1].length-1; j++){
            if(!keys[`${forms[i][1][j]}${forms[i][1][j+1]}`]){
                keys[`${forms[i][1][j]}${forms[i][1][j+1]}`] = forms[i][0];
            }else{
                answer[keys[`${forms[i][1][j]}${forms[i][1][j+1]}`]] = true;
                answer[forms[i][0]] = true;
            }
        }
    }
    const result = [];
    for(let id in answer) {
        result.push(id);
    }
    result.sort();
    return result;
}

const forms = [["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"]]

console.log(solution(forms));