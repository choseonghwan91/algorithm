func solution(_ s:String) -> String {
    let arr: [String] = s.components(separatedBy: " ")
    let convertArr: [String] = arr.map {
        var str = ""
        for i in 0 ..< $0.count {
            let index = $0.index($0.startIndex, offsetBy: i)
            if i == 0 {
                str += changeCased(String($0[index]), true)
            } else {
                str += changeCased(String($0[index]), false)
            }
        }
        return str
    }
    
    return convertArr.joined(separator: " ")
}

func changeCased(_ s:String, _ toUpper: Bool) -> String {
    guard let uniCode = UnicodeScalar(s) else { return s }
    if toUpper && 97...122 ~= uniCode.value {
        return s.uppercased()
    } else if !toUpper && 65...90 ~= uniCode.value {
        return s.lowercased()
    } else {
        return s
    }
}