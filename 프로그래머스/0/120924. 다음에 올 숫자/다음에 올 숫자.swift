import Foundation

func solution(_ common:[Int]) -> Int {
    let last = common[common.count - 1]
    let secondBack = common[common.count - 2]
    let gapF = common[1] - common[0]
    let gapR = last - secondBack
    
    if gapF == gapR {
        return last + gapF
    } else {
        return (last / secondBack) * last
    }
}