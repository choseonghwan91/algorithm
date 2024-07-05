func solution(_ arr:[Int]) -> Int {
    let LCM = arr.reduce(arr[0], { getLCM($0, $1) })
    return LCM
}

func getLCM (_ a: Int, _ b: Int) -> Int {
    var GCD = Int.max
    var preNum = a
    var currNum = b
    
    while currNum != 0 {
        let leftNum = preNum % currNum
        if  leftNum != 0 {
            preNum = currNum
            currNum = leftNum
        } else {
            GCD = currNum
            currNum = leftNum
        }
    }
    return (a * b) / GCD
}