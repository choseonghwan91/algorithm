function solution(elements) {
    let set = new Set();
    let elementsRepeat = [...elements, ...elements];
    
    elements.forEach((_,idx) => {
        let num = 0;
        for(let i = idx; i < elements.length + idx ; i++){
            set.add(num + elementsRepeat[i])
            num += elementsRepeat[i]
        }
    })
    
    return set.size;
}