// https://www.acmicpc.net/problem/2530
#include <iostream>

using namespace std; 

int main(){
    int a,b,c,d;
    cin >> a >> b >> c >> d;
    int sum = d+c;
    while(sum >= 60){
        sum -= 60;
        b++;
        if(b>= 60){
            b-=60;
            a++;
        }
    }

    while(a >= 24){
        a -= 24;
    }

    cout << a << " " <<b<< " " << sum;


    return 0;
}