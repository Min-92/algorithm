//https://www.hackerrank.com/challenges/c-tutorial-functions/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

#include <iostream>
#include <cstdio>
#include <algorithm>
using namespace std;

int max_of_four(int a, int b, int c, int d){
    int aa = max(a,b);
    int bb = max(c,d);
    return max(aa,bb);
}
/*
Add `int max_of_four(int a, int b, int c, int d)` here.
*/

int main() {
    int a, b, c, d;
    scanf("%d %d %d %d", &a, &b, &c, &d);
    int ans = max_of_four(a, b, c, d);
    printf("%d", ans);
    
    return 0;
}
