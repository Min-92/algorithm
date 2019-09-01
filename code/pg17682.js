function solution(str) {
    const numReg = /\d/g;
    const powerReg = /S|D|T/g;
    const prizeReg = /\*|\#/g;

    const scoreArr = [];
    let score = 0;
    for (let i = 0; i < str.length; i++) {
        let number = str[i].match(numReg);
        if (number) {
            if (score !== 0) {
                score = score[0] + number[0];
            } else {
                score = number;

            }
            continue;
        }

        let power = str[i].match(powerReg);
        if (power) {
            if (power[0] === "S") {
                power = 1;
            } else if (power[0] === "D") {
                power = 2;
            } else {
                power = 3;
            }
            const a = Math.pow(score, power)
            scoreArr.push(a);
            score = 0;
            continue;
        }

        let prize = str[i].match(prizeReg);
        if (prize) {
            if (prize[0] === '#') {
                scoreArr[scoreArr.length - 1] = scoreArr[scoreArr.length - 1] * -1;
            } else {
                if (scoreArr[scoreArr.length - 2]) {
                    scoreArr[scoreArr.length - 2] = scoreArr[scoreArr.length - 2] * 2;
                    scoreArr[scoreArr.length - 1] = scoreArr[scoreArr.length - 1] * 2;
                } else {
                    scoreArr[scoreArr.length - 1] = scoreArr[scoreArr.length - 1] * 2;

                }

            }
        }
    }


    var answer = 0;
    for (let i = 0; i < scoreArr.length; i++) {
        answer += scoreArr[i];
    }
    return answer;
}

const str = "1D2S#10S"

console.log(solution(str));
