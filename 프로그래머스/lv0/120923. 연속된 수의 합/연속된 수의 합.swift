import Foundation

func solution(_ num:Int, _ total:Int) -> [Int] {
    let center = total / num
    let half = num / 2
    if num % 2 == 0 {
        return [Int](center - (half - 1) ... center + half)
    } else {
        return [Int](center - half...center + half)
    }
}