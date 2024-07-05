import Foundation

func solution(_ n:Int) -> Int {
    let sqrtNum = sqrt(Double(n))
    let maxNum = Int(floor(sqrtNum))
    var count = 0
    for i in 1...maxNum {
        if n % i == 0 {
            count += 1
        }
    }
    
    return count * 2 + (sqrtNum.truncatingRemainder(dividingBy: 1.0) == 0 ? -1 : 0)
}