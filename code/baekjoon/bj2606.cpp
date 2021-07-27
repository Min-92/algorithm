// https://www.acmicpc.net/problem/2606

#include <iostream>
#include <vector>

using namespace std;

vector<vector <int>> vec;
vector<int> visit;

void dfs(int i){
    visit[i] = true;
    for(int j = 0; j < vec[i].size(); j++){
        if(!visit[vec[i][j]]){
            dfs(vec[i][j]);
        }
    }
}

int main() {
    int n,a,b;
    cin >> n;
    vec = vector<vector <int>> (n+1,vector<int>(0));
    visit = vector<int> (n+1,false);

    cin >> n;

    for(int i = 0; i < n; i++){
        cin >> a >> b;
        vec[a].push_back(b);
        vec[b].push_back(a);
    }

    dfs(1);
    int count = -1;
    for(int i = 0; i < vec.size(); i++){
        if(visit[i]){
            count++;
        }
    }

    cout << count;


    return 0;
}