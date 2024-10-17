function solution(today, terms, privacies) {
    const answer = [];
    const todayDate = new Date(today).getTime();
    const _terms = {};
    
    terms.forEach((term) => {
        const [termType, termMonth] = term.split(" ");
        _terms[termType] = Number(termMonth);
    })
    
    privacies.forEach((privacy, index) => {
        const [date, termType] = privacy.split(" ");
        const _date = new Date(date)
        if(todayDate >= _date.setMonth(_date.getMonth() + _terms[termType])) {
            answer.push(index + 1)
        }
    })
    return answer;
}