function solution(arr){
    // 루프에서 바로 비교할 수 있도록 초기값으로 첫번째 값 지정하기
    const answer = [arr[0]];
    
    // 순회하면서 반환값 만들기
    for(let i = 1; i < arr.length; i++){
        if(arr[i-1] !== arr[i]) answer.push(arr[i])
    }
    
    return answer;
}