const cache = [];
function inCache(city){
    for(let i = 0; i < cache.length ; i++){
        if(cache[i] === city) return i;
    }
    return false;
}

function solution(cacheSize, cities) {

    
    let time = 0;
    if(cacheSize === 0){
        return cities.length*5;
    }
    for(let i = 0; i < cities.length; i++){
        let cur = cities[i].toLowerCase();
        let indexOfCache = inCache(cur);
        if(indexOfCache!== false){
            time ++;
            cache.splice(indexOfCache, 1);
            cache.push(cur);
        }else{
            time += 5;
            if(cache.length === cacheSize){
                cache.shift();
                cache.push(cur);
            }else{
                cache.push(cur);
            }
        }
    }



    var answer = 0;
    return time;
}

console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]))