#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>

using namespace std;
    vector<vector<int>> vec;
    vector<bool> visit;
    queue<int> q;
    vector<bool> discover;
    
    void dfs(int start){
        visit[start] = true;
        cout << start;
        for(int i = 1; i < vec[start].size(); i++){
            if(!visit[vec[start][i]]){
                cout << " ";
                dfs(vec[start][i]);
            }
        }
    }

    void bfs(int here){
        int there;

        discover[here] = true;
        q.push(here);

        while(!q.empty()){
            here = q.front();
            cout << here << " ";
            q.pop();

            for(int i = 1; i < vec[here].size(); i++){
                if(!discover[vec[here][i]]){
                    discover[vec[here][i]] = true;
                    q.push(vec[here][i]);
                }
            }
        }
    }


int main(){
    int a,b,c;
    cin >> a >> b >>c;

    vec = vector<vector<int>> (a+1,vector<int>(1,0));
    visit = vector<bool>(a+1,false);
    discover = vector<bool>(a+1,false);


    for(int i = 0; i < b; i++){
        int x,y;
        cin >> x >> y;
        vec[x].push_back(y);
        vec[y].push_back(x);
    }

    for(int i = 0; i < a; i++){
        sort(vec[i].begin(),vec[i].end());
    }   

    dfs(c);
    cout << endl;

    bfs(c);

    return 0;
}