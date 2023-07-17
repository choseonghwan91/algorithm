import Foundation

func solution(_ my_string:String, _ n:Int) -> String {
    let endIdx = my_string.index(my_string.startIndex, offsetBy:n-1)
    return String(my_string[...endIdx])
}