import Foundation

func solution(_ sizes:[[Int]]) -> Int {
    var maxX = 0
    var maxY = 0
    
    sizes.forEach {
        let max = $0.max()!
        let min = $0.min()!
        if max > maxX {
            maxX = max
        }
        if min > maxY {
            maxY = min
        }
    }
    
    return maxX * maxY
}