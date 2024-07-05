import Foundation

func solution(_ s:String) -> [Int] {
    var str = s
    var transCount = 0
    var deleteZeroCount = 0
    
    while str != "1" {
        let result = transBinary(str)
        transCount += 1
        deleteZeroCount += result.zeroCount
        str = result.transStr
    }
    
    return [transCount, deleteZeroCount]
}

func transBinary (_ s: String) -> (zeroCount: Int, transStr: String) {
    var countOne = 0
    var countZero = 0
    s.forEach {
        if $0 == "1" {
            countOne += 1
        } else {
            countZero += 1
        }
    }
    return (zeroCount: countZero, transStr: String(countOne, radix: 2))
}