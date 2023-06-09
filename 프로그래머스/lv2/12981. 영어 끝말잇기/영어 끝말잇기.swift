import Foundation

func solution(_ n:Int, _ words:[String]) -> [Int] {
    var dict = [words[0]: true]
    
    for i in 1..<words.count {
        let currWord = words[i]
        let preWord = words[i-1]
        if dict[currWord] != nil {
            return [(i % n) + 1, Int(ceil((Double(i+1) / Double(n))))]
        } else if preWord.last != currWord.first {
            return [(i % n) + 1, Int(ceil((Double(i+1) / Double(n))))]
        } else {
            dict[currWord] = true
        }
    }
    return [0, 0]
}