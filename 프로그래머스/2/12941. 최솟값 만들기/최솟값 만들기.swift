import Foundation

func solution(_ A:[Int], _ B:[Int]) -> Int
{
    var ans = 0
    let sortedA = A.sorted()
    let sortedB = B.sorted(by: >)
    
    for i in 0..<sortedA.count {
        ans += (sortedA[i] * sortedB[i])
    }

    return ans
}