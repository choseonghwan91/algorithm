import Foundation

func solution(_ n:Int) -> [Int] {
    let sqrtValue = Int(sqrt(Double(n)))
    var answer: [Int] = []
    for i in 1 ... sqrtValue {
        if n % i == 0 {
            answer.append(i)
            answer.append(n / i)    
        }
    }
    
    return Set(answer).sorted()
}