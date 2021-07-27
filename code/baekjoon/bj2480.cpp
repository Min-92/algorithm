// https://www.acmicpc.net/problem/2480

#include <iostream>
#include<algorithm>

using namespace std;

int main(){
    int a,b,c, reward,maxNum;

    cin >> a >> b >> c;

    if(a==b && b== c){
        reward = 10000 + a*1000;
    }else if(a==b || b== c || a==c){
        if(a==b){
            reward = 1000 + a*100;
        }else{
            reward = 1000 + c*100;
        }
    }else{
        maxNum = max(max(a,b),c);
        reward = maxNum*100;
    }


    cout << reward;



    return 0;
}