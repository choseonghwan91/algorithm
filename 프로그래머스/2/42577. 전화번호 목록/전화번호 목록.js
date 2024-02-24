function solution(phone_book) {
    let answer = true;
    const sortedPb = phone_book.sort();
    for(let i = sortedPb.length - 1; i > 0; i--) {
        if(sortedPb[i].startsWith(sortedPb[i-1])){
            answer = false;
            break;
        }
    }
    return answer;
}