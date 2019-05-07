// https://www.acmicpc.net/problem/1149

#include <iostream>
#include <vector>
// #include <array>
#include <algorithm>

using namespace std;

    // int minimum = 1000000;
// void func(int index1, int index2, int sum, vector<vector<int>> vec){
//     if(sum > minimum){
//         return;
//     }
//     if(index1 == vec.size()){
//         minimum = (sum > minimum) ? minimum : sum;
//         return;
//     }
//     sum += vec[index1][index2];
//     if(index2 == 0){
//         func(index1+1,1,sum,vec);
//         func(index1+1,2,sum,vec);
//     }else if(index2 == 1){
//         func(index1+1,0,sum,vec);
//         func(index1+1,2,sum,vec);
//     }else if(index2 == 2){
//         func(index1+1,1,sum,vec);
//         func(index1+1,0,sum,vec);
//     }
// }

int main(){
    int n;
    cin >> n;
    vector<int> vec(3);
    int a,b,c;
    vector<int> sum(3,0);
    vector<int> prevSum(3,0);

    for(int i = 0; i < n; i++){
        cin >> vec[0] >>vec[1]>>vec[2];

            prevSum[0] = sum[0];
            prevSum[1] = sum[1];
            prevSum[2] = sum[2];
            sum[0] = vec[0] + min(prevSum[1],prevSum[2]);
            sum[1] = vec[1] + min(prevSum[0],prevSum[2]);
            sum[2] = vec[2] + min(prevSum[1],prevSum[0]);

    }    



    cout << min(sum[0],min(sum[1],sum[2])) << endl;




    return 0;
}