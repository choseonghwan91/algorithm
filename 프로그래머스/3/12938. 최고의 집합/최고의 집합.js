function solution(n, s) {
    if(n > s) return [-1]
    const num = Math.floor(s/n)
    const arr = Array.from({length:s%n}, ()=> num+1)
    const arr2 = Array.from({length:n-arr.length},()=>num)
    return [...arr, ...arr2].sort((a,b)=>a-b);
}