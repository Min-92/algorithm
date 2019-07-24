#include <vector>
#include <utility>
#include <iostream>
#include <algorithm>

using namespace std;

int main() {

    long long n;
    cin >> n;

    vector<pair<long long,long long>> vec(0);
    long long a,b;
    long long sum = 0;
    for(long long i = 0; i < n; i++){
        cin >> a >> b;
        vec.push_back(pair<long long,long long>(a,b));
        sum += b;
    }

    sort(vec.begin(), vec.end());

    long long l = 0, r = sum - vec[0].second;
    long long ll, rr;
    long long result;
    for(long long i = 0; i < n; i++){
        l += vec[i].second;
        if(l >= sum-l){
            result = vec[i].first;
            break;
        }
    }

    cout << result << endl;

    return 0;
}