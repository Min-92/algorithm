// https://app.codesignal.com/arcade/intro/level-2/xskq4ZxLyqQMCLshr/drafts

int matrixElementsSum(std::vector<std::vector<int>> mat) {
    
    std::vector<int> ve (mat[0].size());
    
    for(int i = 0 ; i < ve.size(); i++){
        ve[i] = mat[0][i];
    }
    
    int sum = 0;
    
    for(int i = 1; i < mat.size(); i++){
        for(int j = 0; j < mat[i].size(); j++){
            if(ve[j] != 0){
                if(mat[i][j] == 0){
                    sum += ve[j];
                    ve[j] = 0;
                }else{
                    ve[j] += mat[i][j];
                }
            }
        }
    }


    for(int i = 0; i < ve.size(); i++){
        sum += ve[i];
    }
    
    std::cout << sum;
    
    return sum;
}
