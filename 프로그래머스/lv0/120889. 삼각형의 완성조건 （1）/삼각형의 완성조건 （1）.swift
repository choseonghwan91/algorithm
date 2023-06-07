import Foundation

func solution(_ sides:[Int]) -> Int {
    let sortedInt = sides.sorted()
    let long = sortedInt[2]
    let sum = sortedInt[0] + sortedInt[1]
    
    return long < sum ? 1 : 2
}