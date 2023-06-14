func solution(_ x:Int, _ n:Int) -> [Int64] {
    let x64 = Int64(x)
    var _x = x64
    var arr: [Int64] = []
    
    for _ in 1...n {
        arr.append(_x)
        _x += x64
    }
    
    return arr
}