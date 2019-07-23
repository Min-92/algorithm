#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

int main() {

    int n,m,k;

    cin >> n >> m >> k;

    int sum = n+m;

    int nn;
    nn = n/2;
    int mm;
    mm = min(nn,m);

    while(sum - mm*3 -k < 0){
        mm -= 1;
    }
    cout << mm <<endl;
    return 0;
}