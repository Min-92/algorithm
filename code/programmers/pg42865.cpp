#include <vector>

using namespace std;

int solution(int n, vector<int> lost, vector<int> reserve) {
    vector<int> st(n+1,1);
    st[0] = 0;
    for(int i = 0; i < lost.size(); i++){
        st[lost[i]]--;
    }
    for(int i = 0; i < reserve.size(); i++){
        st[reserve[i]]++;
    }

    for(int i = 1; i <= n; i++){
        if(st[i] == 0){
            if(st[i-1] == 2){
                st[i] = 1;
                st[i-1] = 1;
            }else if(i < n){
                if(st[i+1] == 2){
                    st[i] = 1;
                    st[i+1] = 1;
                }
            }
        }
    }

    int answer = 0;

    for(int i = 1; i <= n; i++){
        if(st[i]){
            answer ++;
        }
    }






    return answer;
}