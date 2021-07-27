// https://www.acmicpc.net/problem/10451

#include <iostream>
#include <vector>

using namespace std;

vector<int> vec;
vector<bool> visit;
int count = 0;

void dfs(int index){
    visit[index] = true;
    if(!visit[vec[index]]){
        dfs(vec[index]);
    }
}

int main(){
    int n;
    cin >> n;
    int a;
    int b;
    for(int i = 0; i < n ; i++){
        cin >> a;
        // vec.resize(a,0);
        // visit.resize(a,false);
        vec = vector<int>(1,0);
        visit = vector<bool>(1,false);
        for(int j = 1; j <= a; j++){
            cin >> b;
            vec.push_back(b);
            visit.push_back(false);
        }

        for(int j = 1; j <= a; j++){
            if(!visit[j]){
                dfs(j);
                count ++;
            }
        }
        cout << count<<endl;
        count = 0;

    }




    return 0;
}