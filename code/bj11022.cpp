// https://www.acmicpc.net/problem/11022

#include <iostream>
#include <stdio.h>

using namespace std;

int main(){
    int t;

    cin >> t;
    int a,b;
    for(int i = 0; i < t ; i++){
        cin >> a >> b;

        printf("Case #%d: %d + %d = %d\n",i+1,a,b,a+b);
    }

    return 0;
}