import Foundation

func solution(_ quiz:[String]) -> [String] {
    func calc (_ operatorValue:Substring, _ value1:Int, _ value2:Int) -> Int {
        if operatorValue == "+" { return value1 + value2 }
        else { return value1 - value2 }
    }
    
    var answer : [String] = []
    
    for formula in quiz {
        let f = formula.split(separator: " ") // formula split
        if calc(f[1], Int(f[0]) ?? 0, Int(f[2]) ?? 0) == Int(f[4]) ?? 0 {
            answer.append(String("O"))
        } else {
            answer.append(String("X"))
        }
    }
    
    print(answer)
    return answer
}