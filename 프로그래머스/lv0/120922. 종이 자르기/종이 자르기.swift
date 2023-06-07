import Foundation

func solution(_ M:Int, _ N:Int) -> Int {
    let horizontal = M - 1
    let vertical = (N - 1) * (horizontal + 1)
    return horizontal + vertical
}