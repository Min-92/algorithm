
const coinChange = function (coins, amount) {
    // const co = coins.sort(comp);
    const co = coins.sort();
    co.splice(0,0,0);
    let ans = 0;

    const dp = [];
    for(let i = 0; i < co.length; i++){
        const coin = co[i];
        dp.push([0])
        for(let j = 1; j <= amount; j++){
            if( i === 0 ) break;
    
            let a, b;
    
            if(dp[i][j-coin] !== undefined) {
                a = dp[i][j-coin]+1;
                dp[i][j] = a;
                if(dp[i-1][j] !== undefined) {
                    b = dp[i-1][j]
                    dp[i][j] = Math.min(a,b);
                }
                
            }else{
                dp[i][j] = dp[i-1][j]

            }
        }
    }


    if(dp[co.length-1][amount] === undefined) return -1;
    return dp[co.length-1][amount];
};

console.log(coinChange([1,4,6],8))