// https://www.acmicpc.net/problem/2178

#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int main(){
    bool tata = true;
    vector<vector<int> > graph;
    int a,b;
    vector<int> here;
    vector<int> there;
    vector<int> x = {0,0,1,-1};
    vector<int> y = {1,-1,0,0};
    cin >> a >> b;
    graph = vector<vector<int> >(a,vector<int>(b));
    queue<vector<int> > q;
    vector<vector<bool> > discover(a,vector<bool>(b,false));


    string n;
    for(int i = 0; i < a; i ++){
        cin >> n;
        for(int j = 0; j < b; j++){
            graph[i][j] = n[j] - '0';
        }
    }   

    discover[0][0] = true;
    q.push({0,0,1});

    int result = 0;
    while(!q.empty()){
        here = q.front();
        if(here[0] == a-1 && here[1] == b-1){
            result = here[2];
            break;
        }
        q.pop();

        for(int i = 0; i < 4; i++){
            there = {here[0]+x[i],here[1]+y[i],here[2]+1};
            if(there[0]>=0 && there[0] < a && there[1] >= 0 && there[1] < b && !discover[there[0]][there[1]]&&graph[there[0]][there[1]] == 1){
                q.push(there);
                discover[there[0]][there[1]] = true;
            }
        }


    }

    cout << result;

    return 0;
}