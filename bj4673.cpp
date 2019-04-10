#include <iostream>
#include <vector>

using namespace std;

int getNum(int a){
//재귀
    if(a == 0){
        return 0;
    }else{
        return a%10 + getNum(a/10);
    }
}

// int getNum(int a){
//     //반복문
//     int result = 0;

//     do{
//         result += a%10;
//         a = a/10;
//     }while(a > 0);

//     return result;
// }

int main(){

    vector<int> array(10001,1);
    int SN;
    for(int i = 1; i <= 10000; i ++){
        SN = getNum(i)+i;
        if(SN <= 10000){
            array[SN] = 0;

        }
        if(array[i] != 0){
            cout << i <<endl;
        }
    }   
}



