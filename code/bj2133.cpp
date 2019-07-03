//https://www.acmicpc.net/problem/2133

#include <vector>
#include <iostream>

using namespace std;

int main(){
    int n;
    cin >> n;
    vector<int> vec(30);

    vec[0] = 1;
    vec[1] = 3;

    int a;
    for(int i = 4; i <= n; i++){
        if(i%2 == 0){
            a = i/2;
            vec[a] = 4*vec[a-1] - vec[a-2];
        }
    }

    if(n%2 != 0){
        cout << 0 << endl;
    }else{
        cout << vec[n/2] << endl;
    }
    return 0;
}