#include <vector>
#include <iostream>

using namespace std;

vector<int> quickSort(vector<int> arr){
    if(arr.size() < 2){
        return arr;
    }
    int pivot = arr[0];
    vector<int> left(0);
    vector<int> right(0);

    for(int i = 1; i < arr.size(); i++){
        if(arr[i] <= pivot){
            left.push_back(arr[i]);
        }else{
            right.push_back(arr[i]);
        }
    }

    left = quickSort(left);
    right = quickSort(right);

    vector<int> result;
    for(int i = 0; i < left.size(); i++){
        result.push_back(left[i]);
    }
    result.push_back(pivot);
    for(int i = 0; i < right.size(); i++){
        result.push_back(right[i]);
    }

    return result;
}

int main() {

    vector<int> vec(0);
    int a,b;
    int sum = 0;
    for(int i = 0; i < 9 ; i++){
        cin >> a;
        vec.push_back(a);
        sum += a;
    }

    int ss;
    for(int i = 0; i < 9; i++){
        for(int j = i+1; j < 9; j ++){
            ss = vec[i] + vec[j]; 
            if(sum - ss == 100){
                a = i;
                b = j;
                break;
            }
        }
    }

    vector<int> rere(0);
    for(int i = 0; i < 9; i++){
        if(i != a && i != b){
            rere.push_back(vec[i]);
        }
    }

    vector<int> result = quickSort(rere);

    for(int i = 0; i < 7 ; i++){
        cout << result[i] << '\n';
    }

    return 0;
}