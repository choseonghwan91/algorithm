func solution(_ n:Int) -> Int {
    var pre = 0
    var curr = 1
    var sum = 1
    
    for i in 2...n {
        sum = pre + curr % 1234567
        pre = curr % 1234567
        curr = sum
    }
    
    return sum % 1234567
}