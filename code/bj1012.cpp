#include <vector>
#include <iostream>

using namespace std;

vector<vector<bool>> visit;
vector<vector<int>> vec;

vector<vector<int>> getPossible(int x, int y){
    if(x == 0){
        if(y == 0){
            return {{1,0},{0,1}} ;
        }
        if(y == visit[0].size()-1){
            return {{0,-1},{1,0}};
        }
        return {{0,-1},{1,0},{0,1}};
    }
    if(y == 0){
        if(x == visit.size()-1){
            return {{-1,0},{0,1}};
        }
        return {{-1,0},{1,0},{0,1}};
    }

    if(x == visit.size()-1){
        if(y == visit[0].size()-1){
            return {{-1,0},{0,-1}};
        }
        return {{0,1},{-1,0},{0,-1}};
    }

    if(y == visit[0].size()-1){
        return {{1,0},{-1,0},{0,-1}};
    }

    return {{-1,0},{0,-1},{1,0},{0,1}};

}

void dfs(int x, int y){
    visit[x][y] = true;
    vector<vector<int>> possible = getPossible(x,y);
    int poX;
    int poY;

    for(int i = 0; i < possible.size(); i++){
        poX = x + possible[i][0];
        poY = y + possible[i][1];

        if(visit[poX][poY] == false && vec[poX][poY] == 1){
            dfs(poX,poY);
        }
    }
}


int main() {
    int n;
    cin >> n;
    int m,x,y;
    int a,b;
    
    for(int i = 0; i <n; i++){
        cin >> x >> y >> m;
        int count = 0;    
        vec = vector<vector<int>> (x,vector<int>(y,0));
        visit = vector<vector<bool>>(x,vector<bool>(y,false));
        for(int j = 0; j < m; j++){
            cin >> a >>b;
            vec[a][b] = 1;

        }


        for(int j = 0 ; j < x; j++){
            for(int k = 0; k < y; k++){
                if(visit[j][k] == false && vec[j][k] == 1){
                    dfs(j,k);
                    count++;
                }
            }
        }

        cout << count << endl;










    }
    return 0;
}