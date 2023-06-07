import Foundation

func solution(_ num_list:[Int]) -> [Int] {
    var numList = Array(num_list)
    var answer : [Int] = [Int]()
    
    for num in 1 ... num_list.count {
        answer.append(numList.removeLast())
    }
    
    return answer
}