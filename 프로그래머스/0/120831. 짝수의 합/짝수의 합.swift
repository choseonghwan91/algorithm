import Foundation

func solution(_ n:Int) -> Int {
    var answer : Int = Int()
    
    for num in 1 ... n {
        if(num % 2 == 0) {
            answer = answer + num
        }
    }
    
    return answer
}