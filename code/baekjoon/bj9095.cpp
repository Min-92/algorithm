#include <iostream>

#include<vector>

using namespace std;

int main(){
    int a;
    cin >> a;
    vector<int> dp(11);

        dp[1] = 1;
        dp[2] = 2;
        dp[3] = 4;

    for(int i = 0; i < a; i++){
        int b;
        cin >>b;

        for(int i = 4; i <= b; i++){
            dp[i] = dp[i-1]+dp[i-2]+dp[i-3];
        }   

        cout << dp[b] <<endl;
        
    }


    return 0;
}