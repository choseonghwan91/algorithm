import Foundation

func solution(_ s:String) -> Int{
    var arr: [Character] = []
    
    for c in s {
        guard let lastChar = arr.last else {
            arr.append(c)
            continue
        }
        
        if lastChar == c {
            arr.removeLast()
        } else {
            arr.append(c)  
        }
    }

    return arr.count > 0 ? 0 : 1
}