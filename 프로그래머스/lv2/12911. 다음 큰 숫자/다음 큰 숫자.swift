import Foundation

func solution(_ n:Int) -> Int
{
    let oneCount = String(n, radix: 2).filter { $0 == "1" }.count
    
    var currNum = n + 1
    var newValueOneCount = String(currNum, radix: 2).filter { $0 == "1" }.count
    while oneCount != newValueOneCount {
        currNum += 1
        newValueOneCount = String(currNum, radix: 2).filter { $0 == "1" }.count
    }
    
    return currNum
}