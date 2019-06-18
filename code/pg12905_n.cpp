#include <iostream>
#include<vector>
#include<algorithm>
using namespace std;


int solution(vector<vector<int>> board){
    vector<vector<int>>dp = board;
    int maxInt = 1;
    int count = 0;
    for(int i = 0; i < board.size(); i++){
        for(int j = 0; j < board[0].size(); j++){
            
            if(board[i][j] !=0){
                count++;
            }
        }
    }
    if(count == 0){
        return 0;
    }

    for(int i = 1; i < board.size(); i++){
        for(int j = 1; j < board[0].size(); j++){
            
            if(board[i][j] !=0){

                    dp[i][j] = min(dp[i][j-1], min(dp[i-1][j] , dp[i-1][j-1]))+1;
                    
                    maxInt = max(dp[i][j], maxInt); 
            }

        }
    }

    return maxInt*maxInt;
}