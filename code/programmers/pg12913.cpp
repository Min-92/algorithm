#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

int solution(vector<vector<int> > land)
{
    int answer = 0;

    vector<int> dp = vector<int>(4);
    vector<int> ex = vector<int>(4);
    int maxnumber = 0;
    for(int i= 0; i < 4; i ++){
        dp[i] = land[0][i];
    }

    for(int i = 1; i < land.size() ; i++){
        ex[0] = dp[0];
        ex[1] = dp[1];
        ex[2] = dp[2];
        ex[3] = dp[3];
        
        for(int j = 0; j < 4; j ++){
            for(int k = 0; k < 4; k++){
                if(k != j){
                    dp[j] = max(dp[j],land[i][j]+ex[k]);
                }
            }
        }
    }
    answer = dp[0];
    for(int i = 1; i < 4 ; i++){
        answer = max(dp[i],answer);
    }    
    
    
    
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    cout << "Hello Cpp" << endl;

    return answer;
}