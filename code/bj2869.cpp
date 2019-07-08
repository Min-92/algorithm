//https://www.acmicpc.net/problem/2869
#include <vector>
#include <iostream>

using namespace std;

int main() {
    cin.tie(NULL);
    cin.tie(NULL);
    ios_base :: sync_with_stdio(false);
    long long a,b,v;
    int i = 0;
    cin >> a >> b >> v;

    i = (v-b)/(a-b);
    if((v-b)%(a-b) != 0){
        cout << i+1 << '\n';
        return 0;
    }

    cout << i << '\n';



    return 0;
} 