// https://www.welcomekakao.com/learn/courses/30/lessons/43165

#include <string>
#include <vector>

using namespace std;
int tgt;
vector<int> vec;
int count = 0;


void dfs(int index, int sum){
    int p,m;
    p = sum+vec[index];
    m = sum-vec[index];
    if(index == vec.size()-1){
        if(p == tgt) count++;
        if(m == tgt) count++;
        return;
    }
    dfs(index+1,p);
    dfs(index+1,m);     
}

int solution(vector<int> numbers, int target) {
    tgt = target;
    vec = numbers;
    dfs(0,0);

    return count;
}