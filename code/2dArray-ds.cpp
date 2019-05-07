//https://www.hackerrank.com/challenges/2d-array/problem
//해커랭크 

#include <bits/stdc++.h>

using namespace std;

// Complete the hourglassSum function below.
int hourglassSum(vector<vector<int>> arr) {
    int sum = 0;
    int max = -54;
    
    for(int i = 0; i <= 3 ; i++){
        for(int j = 0; j <= 3; j++){
            sum = arr[i][j] + arr[i][j+1]+ arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];
            if(max < sum){
                max = sum;
            }
        }

    }    

    return max;

}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    vector<vector<int>> arr(6);
    for (int i = 0; i < 6; i++) {
        arr[i].resize(6);

        for (int j = 0; j < 6; j++) {
            cin >> arr[i][j];
        }

        cin.ignore(numeric_limits<streamsize>::max(), '\n');
    }

    int result = hourglassSum(arr);

    fout << result << "\n";

    fout.close();
    int a;
    return 0;
}



