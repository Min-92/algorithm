// https://www.welcomekakao.com/learn/courses/30/lessons/43162
#include <string>
#include <vector>

using namespace std;
int count = 0;
vector<vector <int>> vec;
vector<bool> visit;

void dfs(int a){
    visit[a] = true;
    for(int i = 0; i < vec[a].size(); i++){
        if(!visit[vec[a][i]]){
            dfs(vec[a][i]);
        }
    }
}


int solution(int n, vector<vector<int>> computers) {
    vec = vector<vector<int>>(n,vector<int>(0));
    visit = vector<bool>(n,false);
    for(int i = 0; i < n; i ++){
        for(int j = 0; j < n; j ++){
            if(computers[i][j] ==1 && i != j){
                vec[i].push_back(j);
            }
        }
    }
    
    for(int i = 0; i < n; i++){
        if(!visit[i]){
            dfs(i);
            count++;
        }
    }
    
    
    
    return count;
}