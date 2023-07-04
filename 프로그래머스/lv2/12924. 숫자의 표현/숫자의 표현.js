function solution(n) {
    const num = Math.ceil(n/2)
    let answer = 1
    for (let i = 1; i < num; i++) {
        if(checkNum(i, num, n)) answer++;
    }
    return answer
}

function checkNum(startNum, endNum, targetNum) {
    let n = 0
    for(let i = startNum; i <= endNum; i++) {
        n += i
        if(n > targetNum) return false
        if(n === targetNum) return true  
      
    }
    return false
}