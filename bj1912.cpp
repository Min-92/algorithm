//백준 1912 연속합

#include <iostream>
using namespace std;
int main(){
    int n ;
    cin >> n;

    int arr[n];
    for(int i = 0; i < n; i++){
        cin >> arr[i];
    }

    int sum = 0;
    int max = arr[0];

    for(int i = 0; i < n; i++){
        sum = sum+arr[i];
        if(arr[i] > sum){
            sum = arr[i];
        }
        if(sum > max){
            max = sum;
        }
    }

    cout << max;
    return 0;
    
}
