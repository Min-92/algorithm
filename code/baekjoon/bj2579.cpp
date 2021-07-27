#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main()
{
    int n;
    cin >> n;

    vector<int> str(n+1);
    vector<int> dp(n+1);

    for (int i = 1; i <= n; i++)
    {
        cin >> str[i];
    }

    dp[1] = str[1];
    dp[2] = str[1] + str[2];
    dp[3] = str[3] + max(str[1], str[2]);

    for (int i = 4; i <= n; i++)
    {
        dp[i] = max(str[i] + str[i - 1] + dp[i - 3], str[i] + dp[i - 2]);
    }

    cout << dp[n] << endl;

    return 0;
}