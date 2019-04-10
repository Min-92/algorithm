//k번째수

#include <string>
#include <vector>
using namespace std;


vector<int> sort(vector<int> arr){
    // vector<int> result;
    int temp;
    for(int i = 0; i < arr.size()-1; i++){
        for(int j = i+1; j < arr.size(); j++){
            temp = 0;
            if(arr[i] > arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }
        }
    }


    return arr;
}


vector<int> solution(vector<int> array, vector<vector<int>> commands) {
    vector<int> answer(commands.size(),0);
    int a,b,c;
    for(int i = 0; i < commands.size(); i++){
        a = commands[i][0];
        b = commands[i][1];
        c = commands[i][2];
        
        vector<int> array2;
        array2 = vector<int>(array.begin()+a-1,array.begin()+b);
        
        array2 = sort(array2);

        answer[i] = array2[c-1];        
    }
    
    
    
    return answer;
}
