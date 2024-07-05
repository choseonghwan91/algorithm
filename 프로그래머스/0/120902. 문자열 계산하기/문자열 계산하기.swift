import Foundation

func solution(_ my_string:String) -> Int {
    func calc (_ oper: Substring, _ value1: Int, _ value2: Int) -> Int {
        if(oper == "+") { return value1 + value2 } 
        else { return value1 - value2 }
    }
    
    let f = my_string.split(separator: " ") // 수식 formula
    var result: Int = Int(f[0]) ?? 0
    for i in 1...f.count / 2 {
        let value = Int(f[i * 2]) ?? 0
        result = calc(f[(i * 2 - 1)], result, value)

    } 
    
    return result
}