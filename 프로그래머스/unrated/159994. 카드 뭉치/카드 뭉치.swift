import Foundation

func solution(_ cards1:[String], _ cards2:[String], _ goal:[String]) -> String {
    var cards1Idx = 0;
    var cards2Idx = 0;
    var _cards1 = cards1
    var _cards2 = cards2
    _cards1.append("")
    _cards2.append("")
    
    
    for i in 0 ..< goal.count {
        if _cards1[cards1Idx] == goal[i] {
            cards1Idx = cards1Idx + 1
        } else if _cards2[cards2Idx] == goal[i] {
            cards2Idx = cards2Idx + 1
        } else {
            return "No"
        }
    }
    
    return "Yes"
}