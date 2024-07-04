function solution(progresses, speeds) {
    const answer = [];
    
    let currentProgresses = Math.ceil((100 - progresses[0]) / speeds[0]);
    let count = 1;
    
    for(let i = 1; i < progresses.length; i++){
        const time = Math.ceil((100 - progresses[i]) / speeds[i]);
        if(time > currentProgresses){
            answer.push(count);
            currentProgresses = time;
            count = 1;
        } else {
            count++;
        }
    }
    
    answer.push(count);
    
    return answer;
}