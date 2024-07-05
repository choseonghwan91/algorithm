function solution(s){
    let answer = true;
    let num = 0
    for(let i = 0; i < s.length; i++){
        if(num < 0) {
            answer = false;
            break;
        } else if(s[i] === "("){
            num++;
        } else {
            num--;
        }
    }
    if(num !== 0) answer = false;

    return answer;
}