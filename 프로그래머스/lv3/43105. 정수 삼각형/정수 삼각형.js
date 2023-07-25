function solution(triangle) {
    const _triangle = [...triangle];
    let sumNumArr = [];
    
    for(let i = _triangle.length-2; i >= 0; i--){
        for(let j = 0; j < _triangle[i].length; j++){
            const leftNum = _triangle[i+1][j]
            const rightNum = _triangle[i+1][j+1]
            const targetNum = _triangle[i][j]
            sumNumArr.push(checkBicNum(leftNum, rightNum, targetNum))
        }
        _triangle[i] = [...sumNumArr];
        sumNumArr = []
    }
    
    return _triangle[0][0];
}

function checkBicNum(ln, rn, tn){
    const leftNum = ln + tn;
    const rightNum = rn + tn;
    return leftNum > rightNum ? leftNum : rightNum;
}