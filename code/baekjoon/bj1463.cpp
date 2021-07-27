#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main(){

    int a;
    cin >> a;

    vector<int> dp(1000001);
    dp[1] = 0;
    for(int i = 2; i <= a; i++){
        dp[i] = dp[i-1]+1;


        if(i%3 == 0){
            dp[i] =min(dp[i/3]+1, dp[i]);
        }else if(i%2 == 0){
            dp[i] =min(dp[i/2]+1, dp[i]);
        }

    }



    cout << dp[a]<<endl;
    return 0;
}