function solution(numbers, target) {
    return dfs(numbers[0],1) + dfs(numbers[0] * -1, 1);
    
    function dfs(num, idx){
        if(idx >= numbers.length) return target === num ? 1 : 0
        return dfs(num + (numbers[idx] * -1),idx+1) + dfs(num + (numbers[idx]),idx+1)
    }
}

