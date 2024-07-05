import Foundation

func solution(_ n:Int) -> Int {
    let calcSqrt = sqrt(Double(n))
    let check = Double(Int(calcSqrt))
    
    return calcSqrt == check ? 1 : 2
}