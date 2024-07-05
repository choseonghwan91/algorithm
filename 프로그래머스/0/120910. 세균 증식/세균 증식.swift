import Foundation

func solution(_ n:Int, _ t:Int) -> Int {
    var answer : Int = n
    
    for _ in 1 ... t {
        answer = answer * 2
    }
    
    return answer
}