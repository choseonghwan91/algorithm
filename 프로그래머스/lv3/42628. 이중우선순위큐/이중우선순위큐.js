function solution(operations) {
    let arr = []
    const _operations = operations.map((d)=> d.split(" "))
    
    for(let i = 0; i < _operations.length; i++) {
        if(_operations[i][0] === "I") {
            arr.push(Number(_operations[i][1]));
        } else {
            arr = arr.sort((a,b)=>a-b)
            if(_operations[i][1] === "1") {
                arr.pop()
            } else {
                arr.shift()
            }
        }
    }
    
    return arr.length === 0 ? [0,0] : [Math.max(...arr) , Math.min(...arr)];
}