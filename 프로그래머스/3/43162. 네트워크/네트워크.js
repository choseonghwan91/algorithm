function solution(n, computers) {
    let result = 0;
    let _computers = computers.map(computer => computer.map(d=>d));
    let visited = Array.from({length:n}, () => false);
    
    for(let i = 0; i < n; i++){
        if(dfs(i, 0)){
            result++; 
        }
    }
    
    return result;
    
    function dfs(x, y){
        if(visited[x]) return false;
        let isCountUp = false;    
        _computers[x].forEach((computer,idx)=> {
            if(computer === 1) {
                isCountUp = true;
                visited[x] = true;
                dfs(idx,0);
                
            }
        })
        return isCountUp;
    }
}