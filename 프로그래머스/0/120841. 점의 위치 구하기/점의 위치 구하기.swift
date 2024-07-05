import Foundation

func solution(_ dot:[Int]) -> Int {
    let x = dot[0] >= 0
    let y = dot[1] >= 0
    
    if(x && y) {
        return 1
    } else if (!x && y) {
        return 2
    } else if (!x && !y) {
        return 3
    } else {
        return 4
    }
}