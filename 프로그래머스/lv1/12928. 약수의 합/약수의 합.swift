import Foundation

func solution(_ n:Int) -> Int {
    let half = Int(ceil(Double(n) / 2))
    var sum = n
    
    if sum == 0 {
        return 0
    }
    if sum == 1 {
        return 1
    }
    
    for i in 1...half {
        if n % i == 0 {
            sum += i
        }
    }
    
    return sum
}