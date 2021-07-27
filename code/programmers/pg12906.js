function solution(arr)
{
    const answer = [];
    let ex = 100;
    for(let i = 0; i < arr.length; i++){
        if(ex ===100) {
            ex = arr[i];
            answer.push(arr[i]);
            continue;
        }
        if(ex === arr[i]){
            continue;
        }
        ex = arr[i];
        answer.push(arr[i]);
        
        
        
    }
    
    
    return answer;
}