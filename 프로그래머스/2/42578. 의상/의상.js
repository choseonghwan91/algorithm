function solution(clothes) {
    let result = 0;
    const map = new Map();
    
    clothes.forEach(([_, type]) => {
        map.set(type, (map.get(type) || 0) + 1)
    });
    
    map.forEach((count) => {
        result += (result * count) + count;
    })
    
    return result;
}