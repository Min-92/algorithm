function solution(n, arr1, arr2) {
    const answer = [];

    for (let i = 0; i < n; i++) {
        let str = '';
        const wall = [];
        let bin1 = arr1[i].toString(2);
        let bin2 = arr2[i].toString(2);
        while(bin1.length !== n){
            bin1 = "0" + bin1;
        }
        
        while(bin2.length !== n){
            bin2 = "0" + bin2;
        }

        for (let j = 0; j < n; j++) {
            if (bin1[j] === "1") {
                wall[j] = "#";
            } else {
                wall[j] = 0;
            }
            if (bin2[j] === "1") {
                wall[j] = "#";
            }

        }
        for (let j = 0; j < n; j++) {
            if (wall[j] === "#") {
                str += "#";
            } else {
                str += " ";
            }
        }


        answer.push(str);
    }

    return answer;
}


console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]
))
// const a = 12;
// const bin = a.toString(2);
// console.log(bin.length);
// console.log(bin);
// console.log(bin[0]);
// console.log(bin[1]);
// console.log(bin[2]);
// console.log(bin[3]);

// const b = parseInt(bin,2);
// console.log(b);

// const wall = [];
// wall[0] = 1;
// wall[2] = 1;
// console.log(wall);
// console.log(wall[1]);