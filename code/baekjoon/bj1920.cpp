#include <map>
#include <iostream>

using namespace std;

int main() {
    cin.tie(NULL);
    cin.tie(NULL);
    ios_base :: sync_with_stdio(false);

    map<int, bool>mp;
    
    int n;
    cin >> n;
    int a;
    for(int i = 0; i < n; i++){
        cin >> a;
        mp[a] = true;
    }
    int m;
    cin >> m;
    for(int i = 0; i < m; i++){
        cin >> a;
        cout << mp[a] << '\n';
    }
    return 0;
}