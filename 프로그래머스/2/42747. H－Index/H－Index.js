function solution(citations) {
    const arr = citations.sort((a,b) => a-b);
    let result = arr.length;
    
    for(let i = 1; i <= arr.length; i++) {
        if(arr[arr.length - i] < i) {
            result = i-1;
            break;
        }
    }
    
    return result;
}