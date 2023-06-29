function solution(absolutes, signs) {
    return absolutes.reduce((p,c,i)=> p + c * (signs[i] ? 1 : -1) ,0);
}