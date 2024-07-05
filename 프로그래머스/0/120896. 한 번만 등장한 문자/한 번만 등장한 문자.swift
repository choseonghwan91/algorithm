import Foundation

func solution(_ s:String) -> String {
    var arr = Array(s).sorted()
    var answer: [String] = []
    if arr.count >= 2 {
         if arr[0] != arr[1] { answer.append(String(arr[0])) }
    
    for i in 1..<arr.count - 1 {
        if arr[i] != arr[i-1] {
            if arr [i] != arr[i+1] {
                answer.append(String(arr[i]))
            }
        }
    }
    
    if arr[arr.count-2] != arr[arr.count-1] { answer.append(String(arr[arr.count-1])) }
    } 
    else {
        return s
    }
   
    
    return answer.joined()
}