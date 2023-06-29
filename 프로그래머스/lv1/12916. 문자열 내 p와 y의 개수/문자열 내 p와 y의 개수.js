function solution(s){
    const strs = {p:1,P:1,y:-1,Y:-1}
    let count = 0
    s.split("").forEach((str => strs[str] && (count += strs[str])))
    return count === 0;
}