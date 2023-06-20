func solution(_ n:Int) -> Int {
    
    guard n > 1 else { return 1 }
    guard n > 2 else { return 2 }
    
    var pre = 1
    var curr = 2
    var temp = curr
    
    for i in 3...n {
        temp = curr % 1234567
        curr = (pre + curr) % 1234567
        pre = temp
    }
    
    return curr
}