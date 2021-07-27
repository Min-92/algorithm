// https://www.acmicpc.net/problem/2667

#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

vector<vector <int>> vec;
vector<int> count1;
int counth = 0;

void dfs(int i, int j){
    counth++;
    int ip,im,jp,jm;
    ip = i+1;
    im = i-1;
    jp = j+1;
    jm = j-1;
    vec[i][j] = 0;
    if(im < 0){
        im = 0;
    }
    if(jm < 0){
        jm = 0;
    }
    if(ip > vec.size()-1){
        ip = vec.size()-1;
    }
    if(jp > vec.size()-1){
        jp = vec.size()-1;
    }
    if(vec[im][j]==1) {
        dfs(im,j);
    }
    if(vec[ip][j]==1) {
        dfs(ip,j);
    }
    if(vec[i][jm]==1) {
        dfs(i,jm);
    }
    if(vec[i][jp]==1) {
        dfs(i,jp);
    }
}

int main(){
    int n, a;
    cin >> n;
    string str;
    vec = vector<vector <int>>(n, vector<int>(n));
    for(int i = 0; i < n; i++){
        cin >> str;
         for(int j = 0; j < n; j++){
             vec[i][j] = int(str[j])-'0';
        }
    }

    int count = 0;

    for(int i = 0; i < n; i++){
        for(int j = 0; j < n; j++){
            if(vec[i][j] != 0){
                dfs(i,j);
                count1.push_back(counth);
                counth = 0;

                count ++;
            }
        }
    }

    sort(count1.begin(),count1.end());

    cout << count<<endl;
    for(int i = 0; i < count1.size(); i++){
        cout << count1[i]<<endl;

    }

    return 0;
}