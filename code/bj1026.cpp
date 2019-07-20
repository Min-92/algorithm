// https://www.acmicpc.net/problem/1026
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

vector<int> nquickSort(vector<int> arr){
    if(arr.size() < 2){
        return arr;
    }
    int pivot = arr[0];
    vector<int> left(0);
    vector<int> right(0);

    for(int i = 1; i < arr.size(); i++){
        if(arr[i] > pivot){
            left.push_back(arr[i]);
        }else{
            right.push_back(arr[i]);
        }
    }

    left = nquickSort(left);
    right = nquickSort(right);

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

    cin.tie(NULL);
    cin.tie(NULL);
    ios_base :: sync_with_stdio(false);
    int n;
    cin >> n;

    vector<int> a(n);
    vector<int> b(n);
    int aa;
    for(int i = 0; i < n; i++){
        cin >> aa;
        a[i] = aa;
    }

    for(int i = 0; i < n; i++){
        cin >> aa;
        b[i] = aa;
    }

    a = quickSort(a);
    b = nquickSort(b);

    int sum = 0;
    for(int i = 0; i < n; i ++){
        sum += a[i]*b[i];
    }

    cout << sum << '\n';

    return 0;
}