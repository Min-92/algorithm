// https://www.acmicpc.net/problem/1934

#include <iostream>

using namespace std;

int main()
{
    int a, b, index, n;
    cin >> n;
    for (int j = 0; j < n; j++)
    {
        index = 1;
        cin >> a >> b;
        if (a >= b){
            while((a*index)%b != 0){
                index++;
            }
            cout << (a*index)<<endl;
        }else if (a < b){
            while((b*index)%a != 0){
                index++;
            }
            cout << (b*index)<<endl;
        }
    }

    return 0;
}