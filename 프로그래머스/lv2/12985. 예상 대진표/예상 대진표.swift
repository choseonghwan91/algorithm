import Foundation

func solution(_ n:Int, _ a:Int, _ b:Int) -> Int
{
    var answer = 1
    var _a = ceil(Double(a) / 2.0)
    var _b = ceil(Double(b) / 2.0)
    
    while _a != _b {
        answer += 1
        _a = ceil(_a / 2.0)
        _b = ceil(_b / 2.0)
    }
    

    return answer
}