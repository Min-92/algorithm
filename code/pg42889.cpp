#include <string>
#include <vector>
#include <iostream>
#include <functional> 
#include <algorithm>

using namespace std;

vector<int> solution(int N, vector<int> stages) {
    vector<int> fail(N+2,0);
    
    for(int i = 0; i < stages.size(); i++){
        fail[stages[i]]++;
    }

    double count = 0;
    vector<double> result(N+1, 0);
    for(int i = fail.size()-1; i > 0; i--){
        if( i == fail.size() -1){
            count += fail[i];
        }else{
            count +=  fail[i];
            if(count == 0){
                result[i] = 0;
            }else{
                result[i] = fail[i]/count;
            }
        }
    }

    vector<double> result2 = result;
    sort(result.begin(), result.end(), greater<double>() ); 

    
    vector<int> answer(0);

    for(int i = 0 ; i < result.size()-1; i++){
        for(int j = 1 ; j < result2.size(); j++){
            if(result2[j] == result[i]){
                answer.push_back(j);
                result2[j] = 1000;
            }


        }

    }


    return answer;
}
