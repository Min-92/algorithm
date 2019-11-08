const solution = (word) => {
    let answer = "";

    for(let i = 0; i < word.length; i++){
        if(word[i] === " ") {
            answer += " ";
            continue; 
        }
        let code = word.charCodeAt(i);
        
        if(code > 97){
            if(code < 109.5){
                code = code + (109.5 - code)*2
                answer += String.fromCharCode(code);
                continue;
            }
            
            code = code - (code-109.5)*2
            answer += String.fromCharCode(code);
            continue;
        }
        
        if(code < 77.5){
            code = code + ( 77.5 - code)*2
            answer += String.fromCharCode(code);
            continue;
        }
        
        code = code - (code-77.5)*2
        answer += String.fromCharCode(code);

    }

    return answer
}


const str = "I love you";

console.log(solution(str));

console.log()