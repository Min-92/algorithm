const isOut = (a,b) => {
    if(a[1] <= b[0]) return true;
    if(a[0] >= b[1]) return true;
    return false;
}

const splitXY = (arr) => {
    return [[arr[0], arr[2]], [arr[1], arr[3]]];
}

const solution = (lands, wells, point ) => {
    const [pointX, pointY] = splitXY(point);
    for(let i = 0; i < lands.length; i++){
        const [landX, landY]=splitXY(lands[i]);
        if(!isOut(landX, pointX) && !isOut(landY, pointY)) return false;
    }   

    for(let i = 0; i < wells.length; i++){
        const [wellX, wellY] = splitXY(wells[i]);
        if(!isOut(wellX, pointX) && !isOut(wellY, pointY)) return true;
    }

    return false;
}


const lands = [[10,0,30,5],[0,30,20,50],[30,30,40,40]]
const wells = [[15,15,25,25],[40,10,50,20]]
const point = [10,10,30,30]

console.log(solution(lands, wells, point));