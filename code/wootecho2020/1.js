function solution(restaurant, riders, k) {
    let answer = 0;

    for(let i = 0; i < riders.length; i++){
        const dx = (riders[i][0] - restaurant[0]);
        const dy = (riders[i][1] - restaurant[1]);
        
        const d = Math.sqrt( Math.pow(dx, 2) + Math.pow(dy,2));
        if( d <= k ) answer++;

    }

    return answer;
}


const res = [0,0];
const riders = [[-700,0], [150,180], [500,500], [150, -800], [800, 800], [-900, 500], [-1100, 900], [10000,10000],[-10000,-10000]];
const k = 1000;

// const res = [10000,10000];
// const riders = [[0,-10000],[0,10000],[10000,-10000]];
// const k = 5000;

// const res = [0,0];
// const k = 10;
// const riders = [[10,0]];

console.log(solution(res,riders,k));
