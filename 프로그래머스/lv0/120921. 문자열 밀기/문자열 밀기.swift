import Foundation

func solution(_ A:String, _ B:String) -> Int {
    let max = A.count
    var text = A
    var newText = String()
    
    if A == B {
        return 0
    }
    
    for i in 1..<max {
        newText = String(text.removeLast())
        newText += text
        if newText == B {
            return i
        }
        text = newText
    }
    
    return -1
}