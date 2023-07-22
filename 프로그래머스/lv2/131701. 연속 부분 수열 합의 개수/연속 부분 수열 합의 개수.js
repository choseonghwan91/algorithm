function solution(elements) {
    let arr = [];
    let elementsRepeat = [...elements, ...elements];
    
    elements.forEach((_,idx) => {
        let num = 0;
        for(let i = idx; i < elements.length + idx ; i++){
            arr.push(num + elementsRepeat[i])
            num += elementsRepeat[i]
        }
    })
    
    return [...new Set(arr)].length;
}