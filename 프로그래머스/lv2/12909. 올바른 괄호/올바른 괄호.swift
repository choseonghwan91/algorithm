import Foundation

func solution(_ s:String) -> Bool
{
    var value = 0
    for c in s {
        if value < 0 { return false }
        if c == ")" {
            value -= 1    
        } else {
           value += 1   
        }
    }
    
    return value == 0 ? true : false
}