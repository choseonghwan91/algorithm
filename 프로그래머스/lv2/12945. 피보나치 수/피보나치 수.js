function solution(n) {
    let result = 1;
    let pre = 1;
    
    for(let i = 2; i < n; i++) {
        const temp = result;
        result = (pre+result)%1234567;
        pre = temp;
    }
    
    return result;
}