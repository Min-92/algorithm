// https://programmers.co.kr/learn/courses/30/lessons/12930
#include <string>
#include <vector>
#include <iostream>

using namespace std;

string solution(string s) {
    int a;
    string answer = "";
    
    int j = 0;
    for(int i = 0; i < s.length(); i++){
        if(s[i-1] == ' '){
            j = 0;
        }
        if(j%2 == 0 && s[i] != ' '){
            if(s[i] >= 97){
                a = s[i]-32;
            }else{
                a = s[i];
            }
        }else{
            if(s[i] != ' '){
                if(s[i] < 97){
                    a = s[i]+32;
                }else{
                    a = s[i];
                }
            }else{
                a = s[i];
            }
        }

        j++;
        answer += (char)a;
    }
    return answer;
}

int main(){
    cout << solution("AAAAAAAAAAA A A A A AAAAA AAA")<<endl;
    return 0;
}