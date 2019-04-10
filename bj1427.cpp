//소트인사이드

#include <iostream>
#include <vector>

using namespace std;


vector<int> sort(vector<int> vec){
    int temp;
    for(int i = 0; i < vec.size()-1; i++){
        for(int j = i+1; j <vec.size(); j++){
            temp = vec[i];
            if(vec[i] < vec[j]){
                vec[i] = vec[j];
                vec[j] = temp;
            }
        }
    }
    
    return vec;

}


int main(){

    int n;
    cin >> n;
    string str = to_string(n);

    vector<int> arr(str.length());

    for(int i = 0; i < str.length(); i++){
        arr[i] = str.at(i)-'0';
    }

    arr = sort(arr);

    for(int i = 0; i < arr.size(); i++){
        cout << arr[i];

    }


    return 0;
}