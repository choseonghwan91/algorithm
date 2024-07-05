import Foundation

func solution(_ num:Int, _ k:Int) -> Int {
    let numList = Array(String(num))
    
    for i in 0..<numList.count {
        if Int(String(numList[i])) == k {
            return i + 1
        }
    }
    return -1
}