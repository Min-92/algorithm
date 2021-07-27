#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> vec (n,0);
    vector<int> vec2 (n,0);
    int a;
    cin >> a;
    vec[0] = a;
    for(int i = 1 ; i < n; i++){
        for(int j = 0; j <= i; j++){
            cin >>a;
            vec2[j] = a;
        }
        for(int j = 0; j <= i; j++){
            if (j == 0){
             vec2[j] += vec[j];
            }else if (j == i) {
                vec2[j] += vec[j-1];
            }else {
                vec2[j] += max(vec[j-1], vec[j]);
            }
        }
        vec = vec2;
    }
    int mx = 0;
    for(int i = 0; i < n; i ++){
        mx = max(mx,vec2[i]);
    }
    cout << mx << endl;

    return 0;
}