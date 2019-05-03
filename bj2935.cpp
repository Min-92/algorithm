// https://www.acmicpc.net/problem/2935

#include <iostream>

using namespace std;

int main()
{
    // long long a,b;
    string a, b, s, result;
    cin >> a >> s >> b;

    int n1 = 0;
    int n2 = 0;

    while (a.length() > 1)
    {
        a.pop_back();
        n1++;
    }
    while (b.length() > 1)
    {
        b.pop_back();
        n2++;
    }
    int n;
    result = "1";
    if (s == "*")
    {
        n = n1 + n2;
        while (n > 0)
        {
            n--;
            result.push_back('0');
        }
        cout << result;
        cin >> a;
    }
    else if (s == "+")
    {
        if (n1 > n2)
        {
                n2 = n1 - n2 - 1;
            while (n1 > 0)
            {
                if (n2 == 0)
                {
                    result.push_back('1');
                }
                else
                {
                    result.push_back('0');
                }
                n1--;
                n2--;
            }
        }
        else if (n1 == n2)
        {
            result = "2";
            while (n1 > 0)
            {
                result.push_back('0');
                n1--;
            }
        }
        else
        {
                n1 = n2 - n1 - 1;
            while (n2 > 0)
            {
                if (n1 == 0)
                {
                    result.push_back('1');
                }
                else
                {
                    result.push_back('0');
                }
                n1--;
                n2--;
            }
        }

        cout << result<<endl;
    }

    return 0;
}