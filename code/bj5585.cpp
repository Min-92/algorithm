//https://www.acmicpc.net/problem/5585
#include <vector>
#include <iostream>

using namespace std;

int main() {
    int a;

    cin >> a;
    a = 1000-a;
    int ans = 0;
    vector<int> vec = {500,100,50,10,5,1};

    for(int i = 0 ; i < vec.size(); i++){
        ans += a/vec[i];
        a = a%vec[i];
    }
    cout << ans<< endl;

    return 0;
} 