// https://www.acmicpc.net/problem/10156

#include <iostream>

using namespace std;

int main(){
    int a,b,c;

    cin >> a >> b >> c;

    int result = a*b-c;

    if(result >= 0){
        cout << result << endl;;
    }else{
        cout << 0 << endl;;
    }


    return 0;
}