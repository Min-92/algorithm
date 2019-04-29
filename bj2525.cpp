// https://www.acmicpc.net/problem/2525
#include <iostream>

using namespace std; 

int main(){
    int a,b,c;
    cin >> a >> b >> c;
    int sum = b+c;
    while(sum >= 60){
        sum -= 60;
        a++;
    }

    if(a >= 24){
        a -= 24;
    }

    cout << a << " " << sum;


    return 0;
}