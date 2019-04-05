#include <iostream>
int main(){
    using namespace std;
    int a,b,c;
    cin >>a>>b>>c;

    cout <<(a+b)%c<<'\n'<<(a%c+b%c)%c<<'\n'<<(a*b)%c<<'\n'<<(a%c*b%c)%c;
    // cout <<(a%c+b%c)%c;
    // cout <<(a*b)%c;
    // cout <<(a%c*b%c)%c;
    

}
