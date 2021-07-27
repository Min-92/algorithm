#include <vector>
#include <iostream>

using namespace std;

int main() {
    long long n;
    cin >> n;
    long long a = n;
    int count = 1;
    int i = 1;

    int sum  = 0;

    while(a >= 10){
        count++;
        a = a/10;
        i = i*10;
    }
    n -=(i-1);
    sum += n*count;

    i = i*9/10;
    count--;
    while(i >= 9){
        sum += count * i;
        count --;
        i = i/10;
    }

    cout << sum << endl;

    return 0;
}