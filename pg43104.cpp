//프로그래머스 43104 타일장식물
// https://programmers.co.kr/learn/courses/30/lessons/43104


#include <string>
#include <vector>
#include <iostream>

using namespace std;

vector<int> arr(81,-1);
// arr[0] = 0;
// arr[1] = 1;


int fibo(int n){
    if(arr[n] != -1){
        return arr[n];
    }
    arr[n] = fibo(n-1)+fibo(n-2);
    
    return arr[n];
}

long long solution(int N) {
    long long answer = 0;
    answer = 4*fibo(N) + 2*fibo(N);
    
    return answer;
}

int main(){
    cout << arr[0];
}