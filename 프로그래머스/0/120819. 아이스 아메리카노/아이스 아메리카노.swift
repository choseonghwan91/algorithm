import Foundation

func solution(_ money:Int) -> [Int] {
    let aAPrice = 5500
    let maxDrink = money / aAPrice
    let leftMoney = money % aAPrice
    
    return [maxDrink, leftMoney]
}