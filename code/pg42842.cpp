#include <string>
#include <vector>
#include <iostream>

using namespace std;

int getBrown(int a, int b){
    int result;
    result = a*2+b*2+4;
    return result;
}

vector<int> solution(int brown, int red) {
    vector<int> answer(0);
    int myBrown;
    for(int i = 1; i <= red ; i++){
        if(red%i == 0){
            myBrown = getBrown(red/i, i);
            if(myBrown == brown){
                answer.push_back(red/i+2);
                answer.push_back(i+2);
                break;
            }
        }
    }
  
  
    return answer;
}