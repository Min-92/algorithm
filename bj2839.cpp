//백준 2839 설탕배달

#include <iostream>

using namespace std;

int main(){
    int N;
    cin >> N;
    int answer = 0;

    do{
        if(N%5 == 0){
            answer += N/5;
            break;
        }else if(N < 3){
            answer = -1;
            break;
        }else{
            N -=3;
            answer++;
        }
    }while(N >= 0);

    cout << answer;

    return 0;
}