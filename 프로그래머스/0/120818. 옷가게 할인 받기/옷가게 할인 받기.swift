import Foundation

func solution(_ price:Int) -> Int {
    let _price = Double(price)
    let result = price >= 500000 ? _price * 0.8 : price >= 300000 ? _price * 0.9 : price >= 100000 ? _price * 0.95 : _price
    return Int(result)
}