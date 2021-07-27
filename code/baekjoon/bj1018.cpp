#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main(){

    int a,b;

    cin >> a >> b;

    vector<vector<char>> vec(a,vector<char> (b,0));
    int minFw = 10000;
    int minFb = 10000;
    int fw = 0;
    int fb = 0;
    int sum;
    for(int i = 0; i < a ; i++){
        for(int j = 0; j < b ; j++){
            cin >> vec[i][j];
        }
    }

    for(int i = 0; i < a-7; i++){
        for(int j = 0; j < b-7; j++){

            for(int k = i; k < i+8; k++){
                for(int l = j; l < j+8 ; l++){
                    sum = k+l;
                    if(sum%2 == 0){
                        if(vec[k][l] == 'B') fw++;
                        if(vec[k][l] == 'W') fb++;
                    }else if(sum%2 == 1){
                        if(vec[k][l] == 'W') fw++;
                        if(vec[k][l] == 'B') fb++;
                    }
                    
                }
            }
            minFw = min(fw,minFw);
            minFb = min(fb,minFb);
            fw = 0;
            fb = 0;

        }
    }

    cout << min(minFw,minFb) <<endl;


}