import Foundation

func solution(_ str1:String, _ str2:String) -> Int {
    let length = str2.count
    if(str1.count <= length) { return str1 == str2 ? 1 : 2 }
    
    for i in 0...str1.count - length {
        let startIdx = str1.index(str1.startIndex, offsetBy: i)
        let endIdx = str1.index(startIdx, offsetBy:length - 1)
        if str1[startIdx...endIdx] == str2 {
            return 1
        }
    }
    
    return 2
}