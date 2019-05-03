// https://www.acmicpc.net/problem/11653

#include <iostream>

using namespace std;

int main (){
    int a;
    cin >> a;

    
    for(int i = 2; a != 1 ; ++i){
        if(a%i == 0){
            a = a/i;
            cout << i << endl;
            i = 1;
        }
    }
    



    return 0;
}