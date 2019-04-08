//프로그래머스 14406 소수의합
#include <iostream>
#include <vector>
using namespace std;

int main(){
    int N;
    int answer = 0;
    
    cin >> N;

    vector <bool> A(N+1,true);
    for(int i = 2; i <= N; i++){
        if(A[i] != false){
        answer += i;
        }
        for(int j = 2; j*i <= N; j++){
            A[i*j] = false;
        }
    }

    cout << answer;

    return 0;
}
