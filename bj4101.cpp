// https://www.acmicpc.net/problem/4101

#include <iostream>

using namespace std;

int main(){

    int a,b;
    while(a != b || a != 0){
        cin >> a >> b;
        if(a == 0 && a== b){
            break;
        }
        if(a <= b){
            cout << "No" <<endl;
        }else if(a > b){
            cout << "Yes"<<endl;
        }


    }




    return 0;
}