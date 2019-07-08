//https://www.acmicpc.net/problem/2490

#include <vector>
#include <iostream>

using namespace std;

int main() {
    int a;

    for(int i = 0; i < 3; i++){
        int count  = 0;
        for(int j = 0; j < 4; j++){
            cin >> a;
            if(a == 0){
                count ++;
            }
        }

        if(count == 1){
            cout << 'A'<<endl;
        }else if(count == 2){
            cout << 'B'<<endl;
        }else if(count == 3){
            cout << 'C' << endl;
        }else if(count ==4){
            cout << 'D' << endl;
        }else{
            cout << 'E' << endl;
        }
    }
    return 0;
}