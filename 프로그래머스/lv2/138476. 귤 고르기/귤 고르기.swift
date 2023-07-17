import Foundation

func solution(_ k:Int, _ tangerine:[Int]) -> Int {
    var kindDict: [Int:Int] = [:]
    var kindCount = 0
    var pickCount = k
    
    tangerine.forEach { 
        if kindDict[$0] != nil {
            kindDict[$0]! += 1 
        } else {
            kindDict[$0] = 1     
        }
    }
    
    let sortedDict = kindDict.sorted { $0.value > $1.value }
    
    for num in sortedDict {
        if pickCount <= 0 {
            break
        } else {
            pickCount -= num.value
            kindCount += 1
        }
    }
    
    return kindCount
}