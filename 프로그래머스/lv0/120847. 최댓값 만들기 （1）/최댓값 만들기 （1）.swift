import Foundation

func solution(_ numbers:[Int]) -> Int {
    var _numbers = numbers.sorted()
    return _numbers.removeLast() * _numbers.removeLast()
}