#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

int solution(vector<int> citations) {
    int h;
    sort(citations.begin(),citations.end());
    for(int i = 0; i< citations.size(); i++){
        h = citations.size()-i;

        if(citations[i] >= h){
            cout << h<< endl;
            return h;
        }

    }
    cout << 0<< endl;
    return 0;
}

int main(){
    vector<int> vec = {1,1,4,8,1};
    solution(vec);

    return 0;

}

