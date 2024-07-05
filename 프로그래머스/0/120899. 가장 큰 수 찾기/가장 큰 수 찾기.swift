import Foundation

func solution(_ array:[Int]) -> [Int] {
    var result: [Int] = [0, 0]
    for i in 0..<array.count {
        if array[i] > result[0] {
            result[0] = array[i]
            result[1] = i
        }
    }
    return  result
}