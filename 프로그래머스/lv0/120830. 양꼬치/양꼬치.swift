import Foundation

func solution(_ n:Int, _ k:Int) -> Int {
    let stick = n
    let drink = k - n / 10
    return (stick * 12000) + (drink * 2000)
}