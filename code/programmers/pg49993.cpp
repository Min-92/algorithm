// https://www.welcomekakao.com/learn/courses/30/lessons/49993

#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

int solution(string skill, vector<string> skill_trees) {
    vector<int> vec(skill.length(),100);
    int answer = 0;
    int ans;
    int index;
    for(int i = 0; i < skill_trees.size(); i++){
        index = 0;
        ans = 1;
        for(int j = 0; j < skill.length(); j++){
            for(int k = 0; k < skill_trees[i].length(); k++){
                if(skill[j] == skill_trees[i][k]){
                    vec[j] = k;
                }
            }
        }

        for(int j = 0; j < skill.length(); j++){
            for(int k = j+1; k < skill.length();k++)
            if(vec[j] > vec[k]){
                ans = 0;
            }
        }

        if(ans == 1){
            answer++;
        }

        vec = vector<int>(skill.length(),100);
    }


    return answer;
}



int main(){
    string skill = "CBD";
    vector<string> skill_trees(4);
    skill_trees[0] = "BACDE";
    skill_trees[1] = "CBADF";
    skill_trees[2] = "AECB";
    skill_trees[3] = "BDA";

    int result;
    result = solution(skill,skill_trees);
    cout << result;

    return 0;
}