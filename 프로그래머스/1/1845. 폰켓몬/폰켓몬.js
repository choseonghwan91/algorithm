function solution(nums) {
    const map = new Map()
    nums.forEach((num) => {
        map.set(num, num)
    })
    
    return map.size > nums.length / 2 ? nums.length / 2 : map.size
}