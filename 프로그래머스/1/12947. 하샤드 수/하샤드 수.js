function solution(x) {
    return x % x.toString().split("").reduce((p,c)=> p + Number(c),0) === 0;
}