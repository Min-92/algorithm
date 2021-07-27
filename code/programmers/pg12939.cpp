#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

string solution(string s) {
    vector<int> vec = vector<int>(0,0);

    string num = "";
    int minn = 10000;
    int maxn = -1000;


    for(int i = 0; i < s.length(); i++){
        if(s[i] == ' '){
            if(num == ""){
                continue;
            }else{
                vec.push_back(stoi(num));
                minn = min(stoi(num),minn);
                maxn = max(stoi(num),maxn);
                num = "";
            }
        }else{
            num += s[i];
        }
            if(i == s.length()-1){
                vec.push_back(stoi(num));
                minn = min(stoi(num),minn);
                maxn = max(stoi(num),maxn);
            }
    }

    string answer = "";

    answer += to_string(minn);  
    answer += " ";
    answer += to_string(maxn);  
    
    
    
    return answer;
}



int main(){

    cout << solution("1 2 3 4")<<endl;
    return 0;
}