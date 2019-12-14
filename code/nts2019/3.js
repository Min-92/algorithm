
// function solution(input) {

//     const obj = { "(": 1, ")": 1, "{": 2, "}": 2, "[": 3, "]": 3 }
//     const objL = { "(": 1, "{": 2, "[": 3 }
//     const objR = { ")": 1, "}": 2, "]": 3 }

//     let count  = 4;

//     const stack = [];

//     const arr = input.split("");

//     for (let i = 0; i < arr.length; i++) {
//         if (!(arr[i] in obj)) {
//             arr.splice(i, 1)
//             i--;
//         }
//     }


//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] in objL) {
//             if(count < obj[arr[i]]) return false;

//             stack.push(arr[i])
//             count = obj[arr[i]]
//         } else {
//             if(objL[stack[stack.length-1]] === objR[arr[i]]){
//                 stack.pop();
//                 // count = obj[stack[stack.length-1]]
//             }else{
//                 return false;
//             }
//         }
//     }

//     if(stack.length) return false;
//     return true;

// }

// console.log(solution("([])"))
// console.log(solution(")("))
// console.log(solution("3+{)}"))
// console.log(solution("3+])}"))
// console.log(solution("{("))
// console.log(solution("{(})"))
// console.log(solution("[{("))
// console.log(solution("(())"))

// console.log(solution("[][]"))
// console.log(solution("()()"))
// console.log(solution("3+[(5+1)-1]"))


function solution(input) {

    const obj = { "(": 1, ")": 1, "{": 2, "}": 2, "[": 3, "]": 3 }
    const objL = { "(": 1, "{": 2, "[": 3 }
    const objR = { ")": 1, "}": 2, "]": 3 }

    const stack = [];

    const arr = input.split("");

    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in obj)) {
            arr.splice(i, 1)
            i--;
        }
    }


    for(let i = 0; i < arr.length; i++){
        if(arr[i] in objL){
            if(objL[stack[stack.length-1]] <= objL[arr[i]]){
                return false;
            }
            stack.push(arr[i]);
            continue;
        }
        
        if(objL[stack[stack.length-1]] === objR[arr[i]]){
            stack.pop();
            continue;
        }
        return false;
    }
    
    
    if(stack.length) return false;
    return true;

}

console.log(solution("([])"))
console.log(solution(")("))
console.log(solution("3+{)}"))
console.log(solution("3+])}"))
console.log(solution("{("))
console.log(solution("{(})"))
console.log(solution("[{("))
console.log(solution("(())"))
console.log(solution(")}]"))

console.log(solution("[][]"))
console.log(solution("()()"))
console.log(solution("3+[(5+1)-1]"))
