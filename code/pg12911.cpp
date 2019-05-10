// https://www.welcomekakao.com/learn/courses/30/lessons/12911

#include <string>
#include <vector>

using namespace std;

int solution(int n) {
    
        int count1 = 0;
        int count2 = 0;
        int index;
        index = n;
        while(index != 1){
                if(index%2 == 1){
                        count1++;
                }
                index = index/2;
        }
        for(int i = n+1; ; i++){
                count2 = 0;
                index = i;
                while(index != 1){
                        if(index%2 == 1){
                                count2++;
                        }
                        index = index/2;
                }
            if(count1 == count2){
                index = i;
                break;
            }
        
        }
    return index;
}