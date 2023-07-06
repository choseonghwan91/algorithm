function solution(people, limit) {
    let answer = 0;
    const sortedPeople = people.sort((a,b)=> a-b);
    let firstIdx = 0;
    let lastIdx = sortedPeople.length - 1;

    for(let i = 0; i < sortedPeople.length; i++) {
        if (firstIdx > lastIdx) return answer;
        if(limit >= sortedPeople[firstIdx] + sortedPeople[lastIdx]) {
            firstIdx++;
            lastIdx--;
        } else if (limit >= sortedPeople[lastIdx]) {
            lastIdx--;
        } else {
            firstIdx++;
        }

        answer++;
    }
    
    return answer;
}
