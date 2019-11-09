const isWithPartner = (amount) => {
    return !!(amount % 1);
}

const subAmountFromCur = (cur, amount, recipe) => {
    let needToGo = false;
    for(let i = 0; i < cur.length; i++){
        cur[i] -= recipe[i] * amount;
        if(cur[i] < 0) needToGo = true;
    }
    return needToGo;
}

const goToShop = (cur, pac, pri) => {
    let price = 0;
    for(let i = 0; i < cur.length; i++){
        while(cur[i] < 0){
            price += pri[i];
            cur[i] += pac[i];
        }
    }
    return price;
}

function solution(history) {
    const answer = [];
    const rec1 = [4, 50, 10, 10, 4];
    const rec2 = [4, 50, 10, 10, 2];
    const cur = [5, 100, 10, 5, 2];
    const pri = [10000, 3000, 1000, 2000, 1000];
    const pac = [10, 100, 30, 50, 10];



    for (let i = 0; i < history.length; i++) {
        const amount = +history[i];
        if (amount > 2.5 || amount <= 0) return [-1];

        let needGoToShop ;
        
        if(isWithPartner(amount)) {
            needGoToShop = subAmountFromCur(cur,amount,rec2);
        }else{
            needGoToShop = subAmountFromCur(cur,amount,rec1);
        }
        
        let price;
        if(needGoToShop){
            price = goToShop(cur,pac,pri);
        }else{
            price = 0;
        }
        answer.push(price);
    }
    return answer;
}

const history1 = ["1.0", "2.0", "1.5"];
const history2 = ["1.0", "2.0", "0.0", "1.0"];
const history3 = ["2.0", "2.5"]
const history4 = ["2.5","2.5","2.5","2.5","2.5","2.5","2.5"]
const history5 = ["1.0", "2.0", "1.5", "2.0", "2.5"];
// console.log(solution(history1));
// console.log(solution(history2));
// console.log(solution(history3));
// console.log(solution(history4));
console.log(solution(history5));