function solution(clothes) {
    let result = 0;
    const map = new Map();
    clothes.forEach(([name, type]) => {
        const value = map.get(type) || []
        map.set(type, [...value,name])
    });
    map.forEach((name, index) => {
        const currentLength = name.length;
        if(index === 0) result += currentLength;
        result += (result * currentLength) + currentLength;
    })
    return result;
}