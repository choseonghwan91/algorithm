import Foundation

func solution(_ numbers:[Int]) -> Double {
    let langth = numbers.count
    let sum = numbers.reduce(0, { prev, curr in prev + curr})
    
    return Double(sum) / Double(langth)
    
}