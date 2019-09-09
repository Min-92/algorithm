const map = {}

function validrow(x, y) {
    return map[`${x}-${y - 1}`].col || map[`${x + 1}-${y - 1}`].col || (map[`${x - 1}-${y}`].row && map[`${x + 1}-${y}`].row)
}
function validcol(x, y) {
    return y === 0 || map[`${x}-${y - 1}`].col || map[`${x - 1}-${y}`].row || map[`${x}-${y}`].row
}

function delrow(x,y){
    map[`${x}-${y}`].row = false;
    
    if(map[`${x-1}-${y}`].row) {
        if(!validrow(x-1,y)) return map[`${x}-${y}`].row = true;
    }
    if(map[`${x+1}-${y}`].row){
        if(!validrow(x+1,y)) return map[`${x}-${y}`].row = true;
    }
    if(map[`${x}-${y}`].col){
        if(!validcol(x,y)) return map[`${x}-${y}`].row = true;
    }
    if(map[`${x+1}-${y}`].col){
        if(!validcol(x+1,y)) return map[`${x}-${y}`].row = true;
    }
    return true;
}

function delcol(x,y){
    map[`${x}-${y}`].col = false;

    if(map[`${x-1}-${y+1}`].row){
        if(!validrow(x-1,y+1)) return map[`${x}-${y}`].col = true;
    } 
    if(map[`${x}-${y+1}`].row){
        if(!validrow(x,y+1)) return map[`${x}-${y}`].col = true;
    }
    if(map[`${x}-${y+1}`].col){
        if(!validcol(x,y+1)) return map[`${x}-${y}`].col = true;
    }
    return true;  
}

function solution(n, build_frame) {
    for(let i = 0 ; i < n; i++){
        map[`${i}-${-1}`] = {
            row: false,
            col: false
        }
        map[`${-1}-${i}`] = {
            row: false,
            col: false
        }
        map[`${n+1}-${i}`] = {
            row: false,
            col: false
        }
        map[`${i}-${n+1}`] = {
            row: false,
            col: false
        }
    }
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            map[`${i}-${j}`] = {
                row: false,
                col: false
            }
        }
    }

    for (let i = 0; i < build_frame.length; i++) {
        const x = build_frame[i][0];
        const y = build_frame[i][1];

        if (build_frame[i][3]) {
            //설치
            if (build_frame[i][2]) {
                // row
                if (validrow(x, y)) map[`${x}-${y}`].row = true;
            } else {
                // col
                if (validcol(x, y)) map[`${x}-${y}`].col = true;
            }
        } else {
            //삭제
            if (build_frame[i][2]) {
                // row
                delrow(x,y);
            } else {
                // col
                delcol(x,y);
            }

        }
    }


    let answer = [];
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            if(map[`${i}-${j}`].col) answer.push([i,j,0])
            if(map[`${i}-${j}`].row) answer.push([i,j,1])
        }
    }
    return answer;
}