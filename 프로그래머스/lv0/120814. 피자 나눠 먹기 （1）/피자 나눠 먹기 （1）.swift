import Foundation

func solution(_ n:Int) -> Int {
    let haveRest = (n % 7) > 0 ? 1 : 0
    return (n / 7) + haveRest
}