function solution(s){
    let answer = true;
    let count = 0;
    
    for(let i = 0; i < s.length; i++){
        s[i] === "(" ? count++ : count--
        if(count < 0) {
            answer = false;
            break;
        }
    }
    
    if(count !== 0) answer = false;
    return answer;
}