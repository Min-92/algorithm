#include <algorithm>  


class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        vector<int> sol(cost.size());
        sol[0] = cost[0];
        sol[1] = cost[1];
        
        for(int i = 2; i < cost.size(); i++){
            sol[i] = cost[i] + min(sol[i-1], sol[i-2]);
        }
        
        return min(sol[cost.size()-1], sol[cost.size()-2]);
    }
};