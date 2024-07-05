import Foundation

func solution(_ num_list:[Int]) -> [Int] {
    var even: Int = 0
    var odd: Int = 0
    
    for num in num_list {
        if(num % 2 == 1) {
            odd += 1
        }
        else {
            even += 1
        }
    }
    return [even, odd]
}