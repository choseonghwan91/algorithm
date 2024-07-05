import Foundation

func solution(_ array:[Int]) -> Int {
    var count : Int = 0
    var str = String()
    
    for n in array {
        str += String(n)
    }
    
    for s in str {
        if s == "7" {
            count += 1
        }
    }
    
    return count
}