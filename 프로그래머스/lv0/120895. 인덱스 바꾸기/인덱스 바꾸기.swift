import Foundation

func solution(_ my_string:String, _ num1:Int, _ num2:Int) -> String {
    var stringToArr = Array(my_string)
    stringToArr.swapAt(num1, num2)
    return String(stringToArr)
}