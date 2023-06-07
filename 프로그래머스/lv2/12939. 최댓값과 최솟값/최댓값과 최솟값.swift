func solution(_ s:String) -> String {
    let arr = s.split(separator: " ")
    var max: Int = Int.min
    var min: Int = Int.max
    
    arr.forEach {
        let num = Int($0)!
        if num < min {
            min = num
        }
        if num > max {
            max = num
        }
    }
    
    return "\(min) \(max)"
}