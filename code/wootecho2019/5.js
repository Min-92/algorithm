const solution = (number) => {
    let answer1 = 0;
    let answer2 = 0;

    answer1 += 3 * Math.floor(number/10); 
    answer1 += Math.floor(number%10/3);

    answer1 += 3*10* (Math.floor(number/100))
    answer1 += Math.floor(number%100/30)

    if((number%100 - number%10) !== 0 && (number%100 - number%10)%30 === 0){
        answer1 += (number%10);
    }
    
    answer1 += 3*100* (Math.floor(number/1000))
    answer1 += Math.floor(number%1000/300)  

    if((number%1000 - number%100) !== 0 && (number%1000 - number%100)%300 === 0){
            answer1 += (number%100);
    }
    
    answer1 += 3*1000* (Math.floor(number/10000))
    answer1 += Math.floor(number%10000/3000)  

    if((number%10000 - number%1000) !== 0 && (number%10000 - number%1000)%3000 === 0){
            answer1 += (number%1000);
    }


    for(let i = 1; i <= number; i++){
       
        if(i%10 === 3 || i%10 === 6 || i%10 === 9) answer2 ++;
       
        if(Math.floor(i%100/10) === 3 || Math.floor(i%100/10) === 6 || Math.floor(i%100/10) === 9) answer2++;
       
        if(Math.floor(i%1000/100) === 3 || Math.floor(i%1000/100) === 6 || Math.floor(i%1000/100) === 9) answer2++;
       
        if(Math.floor(i%10000/1000) === 3 || Math.floor(i%10000/1000) === 6 || Math.floor(i%10000/1000) === 9) answer2++;
    }


    return [answer1, answer2];
}



const num1 = 13
const num2 = 33

// console.log(solution(num1));
// console.log(solution(num2));
console.log(solution(400));
// console.log(1, 1/3);
// console.log(2, 2/3);
// console.log(3, 3/3);
// console.log(4, 4/3);
// console.log(5, 5/3);
// console.log(6, 6/3);
// console.log(7, 7/3);
// console.log(8, 8/3);
// console.log(9, 9/3);
// console.log(10, 10/3);
// console.log(11, 11/3);
// console.log(12, 12/3);
// console.log(13, 13/3);
// console.log(14, 14/3);
// console.log(15, 15/3);
// console.log(16, 16/3);


// let cnt = 0;
// for(let i = 1 ; i < 100; i++){
//     if(i%10 === 3 || i%10 === 6 || i%10 === 9){
//         cnt++;
//     }

//     if(Math.floor(i/10) === 3 || Math.floor(i/10) ===6 || Math.floor(i/10) ===9) cnt++

// }
// console.log(cnt);
// console.log(3 * 10 + 3 * 10)