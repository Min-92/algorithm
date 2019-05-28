//https://www.welcomekakao.com/learn/courses/30/lessons/42883

#include <string>
#include <vector>
#include <iostream>

using namespace std;

string solution(string number, int k) {
    string origin = number;
    int max = 0;
    int index = 0;
    string answer = "";
    while(k > 0){
        for(int i = 0; i <= k; i++){
            if(number[i]-'0' > max){
                max = number[i]-'0';
                index = i;
            }
        }

        k = k-index;
        answer += to_string(max);
        number = number.substr(index+1,number.size()-(index+1));
        if(number.size() == 0) break;
        max = 0;
    }
    answer += number;

    if(origin == answer){
        cout << "ori,ans"<<endl;
        answer = answer.substr(0,answer.size()-(k));
    }

    return answer;
}

int main(){
    cout << solution("100000",2)<<endl;;
    return 0;
}
