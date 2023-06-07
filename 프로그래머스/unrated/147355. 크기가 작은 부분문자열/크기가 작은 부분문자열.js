function solution(t, p) {
    const convertNumOfP = Number(p); // 넘버로 바꾸는 작업을 한번만 하기 위해서
    let firstIdx = 0;
    let lastIdx = p.length;
    let lessOrEqualCount = 0;
    
    for(let i = lastIdx -1; i < t.length; i++) {
        if(Number(t.substring(firstIdx, lastIdx)) <= convertNumOfP){
           lessOrEqualCount++;
        }
        firstIdx++;
        lastIdx++;
    }
    
    return lessOrEqualCount
}