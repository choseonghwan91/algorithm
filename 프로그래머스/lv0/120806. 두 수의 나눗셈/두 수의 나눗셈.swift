import Foundation

func solution(_ num1:Int, _ num2:Int) -> Int {
    let floatNum1 = Double(num1)
    let floatNum2 = Double(num2)
    return Int(floatNum1 / floatNum2 * 1000)
}