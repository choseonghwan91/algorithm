function solution(progresses, speeds) {
    const answer = [];
    
    // 현재 작업시간을 가진 변수를 선언한다.
    let currentProgresses = Math.ceil((100 - progresses[0]) / speeds[0]);
    // 진행중인 작업 수량을 가진 변수를 선언한다.
    let count = 1;
    
    // 배열을 순회하면서 
    // 만약에 현재 작업시간보다 크면
    //    진행중인 작업 수량 값을 answer에 넣는다 & 현재 작업시간, 진행중인 작업수량을 초기화한다.
	// 작으면
	//    작업수량을 올린다
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
    
    // 마지막에 작업한 요소에 대해 푸시한다.
    answer.push(count);
    
    return answer;
}